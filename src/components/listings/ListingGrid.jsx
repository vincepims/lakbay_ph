import { SearchX } from 'lucide-react';
import { ListingCard } from './ListingCard';

export function ListingGrid({ listings, compact = false }) {
  if (!listings.length) return <div className="empty-results"><SearchX /><h2>No stays match these filters</h2><p>Try another province, locality, or price range.</p></div>;
  return <div className={`listing-grid ${compact ? 'listing-grid--compact' : ''}`}>{listings.map((listing) => <ListingCard key={listing.id} listing={listing} compact={compact} />)}</div>;
}
