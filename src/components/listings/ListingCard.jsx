import { Heart, MapPin, Star } from 'lucide-react';
import { Link } from '../../app/router';
import { useMarketplace } from '../../context/MarketplaceContext';

export const formatPrice = (value) => new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(value);

export function ListingCard({ listing, compact = false }) {
  const { favorites, toggleFavorite, activeListingId, setActiveListingId } = useMarketplace();
  const saved = favorites.includes(listing.id);
  return <article className={`listing-card ${compact ? 'listing-card--compact' : ''} ${activeListingId === listing.id ? 'is-active' : ''}`} onMouseEnter={() => setActiveListingId(listing.id)} onMouseLeave={() => setActiveListingId(null)}><div className="listing-card__media"><Link to={`/stays/${listing.slug}`}><img src={listing.image} alt={listing.title} /></Link>{listing.badge && <span className="listing-badge">{listing.badge}</span>}<button className={saved ? 'saved' : ''} onClick={() => toggleFavorite(listing.id)} aria-label={saved ? 'Remove from favorites' : 'Save to favorites'}><Heart fill={saved ? 'currentColor' : 'none'} /></button></div><div className="listing-card__body"><div className="listing-card__location"><span><MapPin />{listing.locality}, {listing.province}</span><strong><Star fill="currentColor" />{listing.rating}</strong></div><h3><Link to={`/stays/${listing.slug}`}>{listing.title}</Link></h3><p>{listing.bedrooms} bedroom{listing.bedrooms > 1 ? 's' : ''} · {listing.beds} bed{listing.beds > 1 ? 's' : ''} · Up to {listing.guests} guests</p><div className="listing-card__price"><strong>{formatPrice(listing.price)}</strong><span>night</span></div></div></article>;
}
