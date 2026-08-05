import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultFilters, listings as seedListings } from '../data/marketplaceData';

const MarketplaceContext = createContext(null);

function loadLocal(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}

export function MarketplaceProvider({ children }) {
  const [filters, setFilters] = useState(defaultFilters);
  const [favorites, setFavorites] = useState(() => loadLocal('lakbay-favorites', []));
  const [trips, setTrips] = useState(() => loadLocal('lakbay-trips', []));
  const [hostListings, setHostListings] = useState(() => loadLocal('lakbay-host-listings', []));
  const [mapVisible, setMapVisible] = useState(true);
  const [activeListingId, setActiveListingId] = useState(null);

  useEffect(() => localStorage.setItem('lakbay-favorites', JSON.stringify(favorites)), [favorites]);
  useEffect(() => localStorage.setItem('lakbay-trips', JSON.stringify(trips)), [trips]);
  useEffect(() => localStorage.setItem('lakbay-host-listings', JSON.stringify(hostListings)), [hostListings]);

  const allListings = useMemo(() => [...hostListings, ...seedListings], [hostListings]);
  const filteredListings = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const results = allListings.filter((listing) => {
      const haystack = `${listing.title} ${listing.province} ${listing.locality} ${listing.region}`.toLowerCase();
      return (!query || haystack.includes(query)) &&
        (!filters.province || listing.province === filters.province) &&
        (!filters.locality || listing.locality === filters.locality) &&
        (filters.category === 'all' || listing.category === filters.category) &&
        listing.guests >= filters.guests && listing.price >= filters.minPrice && listing.price <= filters.maxPrice &&
        listing.bedrooms >= filters.bedrooms && (!filters.instantBook || listing.instantBook) &&
        filters.amenities.every((amenity) => listing.amenities.includes(amenity));
    });
    return [...results].sort((a, b) => filters.sort === 'price-low' ? a.price - b.price : filters.sort === 'price-high' ? b.price - a.price : filters.sort === 'rating' ? b.rating - a.rating : (b.rating * b.reviews) - (a.rating * a.reviews));
  }, [allListings, filters]);

  const updateFilters = (patch) => setFilters((current) => ({ ...current, ...patch }));
  const resetFilters = () => setFilters(defaultFilters);
  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const createTrip = (trip) => { const saved = { ...trip, id: `trip-${Date.now()}`, status: 'Confirmed', bookedAt: new Date().toISOString() }; setTrips((current) => [saved, ...current]); return saved; };
  const createHostListing = (listing) => { const saved = { ...listing, id: `host-${Date.now()}`, slug: `host-${Date.now()}`, rating: 5, reviews: 0, host: 'You', instantBook: true, badge: 'New', amenities: listing.amenities || ['Wi-Fi'], gallery: [listing.image] }; setHostListings((current) => [saved, ...current]); return saved; };

  return <MarketplaceContext.Provider value={{ filters, updateFilters, resetFilters, favorites, toggleFavorite, trips, createTrip, allListings, filteredListings, hostListings, createHostListing, mapVisible, setMapVisible, activeListingId, setActiveListingId }}>{children}</MarketplaceContext.Provider>;
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext);
  if (!context) throw new Error('useMarketplace must be used within MarketplaceProvider');
  return context;
}
