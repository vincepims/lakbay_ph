import L from 'leaflet';
import { useEffect, useRef } from 'react';
import { navigate } from '../../app/router';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatPrice } from '../listings/ListingCard';

export function MarketplaceMap({ listings }) {
  const elementRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const { activeListingId, setActiveListingId } = useMarketplace();

  useEffect(() => {
    if (mapRef.current || !elementRef.current) return;
    mapRef.current = L.map(elementRef.current, { center: [12.4, 122.1], zoom: 5, minZoom: 5, scrollWheelZoom: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', maxZoom: 18 }).addTo(mapRef.current);
    return () => { mapRef.current?.remove(); mapRef.current = null; };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = listings.map((listing) => {
      const active = listing.id === activeListingId;
      const icon = L.divIcon({ className: 'price-marker-wrap', html: `<button class="price-marker ${active ? 'active' : ''}" aria-label="${listing.title}">${formatPrice(listing.price).replace('₱', '₱')}</button>`, iconSize: [82, 36], iconAnchor: [41, 18] });
      const marker = L.marker([listing.lat, listing.lng], { icon }).addTo(map);
      marker.on('click', () => navigate(`/stays/${listing.slug}`)); marker.on('mouseover', () => setActiveListingId(listing.id)); marker.on('mouseout', () => setActiveListingId(null));
      return marker;
    });
    if (listings.length === 1) map.setView([listings[0].lat, listings[0].lng], 10);
    else if (listings.length > 1) map.fitBounds(L.latLngBounds(listings.map((item) => [item.lat, item.lng])), { padding: [35, 35], maxZoom: 10 });
  }, [listings, activeListingId, setActiveListingId]);

  return <div className="market-map" ref={elementRef} aria-label="Interactive map of available stays" />;
}
