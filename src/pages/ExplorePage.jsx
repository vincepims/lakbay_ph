import { List, Map as MapIcon } from 'lucide-react';
import { ListingGrid } from '../components/listings/ListingGrid';
import { MarketplaceMap } from '../components/map/MarketplaceMap';
import { CategoryTabs } from '../components/search/CategoryTabs';
import { FilterPanel } from '../components/search/FilterPanel';
import { SearchBar } from '../components/search/SearchBar';
import { useMarketplace } from '../context/MarketplaceContext';

export function ExplorePage() {
  const { filteredListings, filters, updateFilters, mapVisible, setMapVisible } = useMarketplace();
  return <div className="explore-page"><div className="explore-search shell"><SearchBar /></div><div className="explore-toolbar shell"><CategoryTabs /><div className="explore-toolbar__actions"><FilterPanel /><button className="map-toggle" onClick={() => setMapVisible(!mapVisible)}>{mapVisible ? <List /> : <MapIcon />}{mapVisible ? 'Hide map' : 'Show map'}</button></div></div><div className={`explore-layout ${mapVisible ? 'with-map' : ''}`}><section className="explore-results"><header><div><p className="eyebrow">Stays across the Philippines</p><h1>{filteredListings.length} {filteredListings.length === 1 ? 'place' : 'places'} to stay</h1></div><label>Sort by<select value={filters.sort} onChange={(event) => updateFilters({ sort: event.target.value })}><option value="recommended">Recommended</option><option value="rating">Guest rating</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label></header><ListingGrid listings={filteredListings} compact={mapVisible} /></section>{mapVisible && <aside className="explore-map"><MarketplaceMap listings={filteredListings} /></aside>}</div></div>;
}
