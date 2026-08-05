import { Heart } from 'lucide-react';
import { Link } from '../app/router';
import { ListingGrid } from '../components/listings/ListingGrid';
import { useMarketplace } from '../context/MarketplaceContext';

export function FavoritesPage() {
  const { allListings, favorites } = useMarketplace(); const saved = allListings.filter((listing) => favorites.includes(listing.id));
  return <section className="collection-page shell"><header><p className="eyebrow">Your collection</p><h1>Saved stays</h1><p>Keep the places that caught your eye in one easy list.</p></header>{saved.length ? <ListingGrid listings={saved} /> : <div className="collection-empty"><Heart /><h2>No saved stays yet</h2><p>Tap the heart on any home to find it here later.</p><Link className="primary-button" to="/explore">Explore stays</Link></div>}</section>;
}
