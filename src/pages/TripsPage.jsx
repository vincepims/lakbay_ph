import { CalendarDays, CheckCircle2, Luggage, MapPin } from 'lucide-react';
import { Link } from '../app/router';
import { formatPrice } from '../components/listings/ListingCard';
import { useMarketplace } from '../context/MarketplaceContext';

export function TripsPage() {
  const { trips } = useMarketplace();
  return <section className="collection-page shell"><header><p className="eyebrow">Your travel plans</p><h1>Trips</h1><p>Confirmed reservations saved on this device.</p></header>{trips.length ? <div className="trip-list">{trips.map((trip) => <article key={trip.id}><img src={trip.listingImage} alt="" /><div><span className="trip-status"><CheckCircle2 />{trip.status}</span><h2>{trip.listingTitle}</h2><p><MapPin />{trip.location}</p><p><CalendarDays />{trip.checkIn} → {trip.checkOut}</p><strong>{formatPrice(trip.total)} · {trip.guests} guest{trip.guests > 1 ? 's' : ''}</strong></div></article>)}</div> : <div className="collection-empty"><Luggage /><h2>No trips booked yet</h2><p>When you reserve a stay, your trip details will appear here.</p><Link className="primary-button" to="/explore">Find a place to stay</Link></div>}</section>;
}
