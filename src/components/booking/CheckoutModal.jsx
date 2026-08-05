import { CheckCircle2, LockKeyhole, X } from 'lucide-react';
import { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { formatPrice } from '../listings/ListingCard';

export function CheckoutModal({ listing, booking, onClose }) {
  const [confirmed, setConfirmed] = useState(false);
  const { createTrip } = useMarketplace();
  const submit = (event) => { event.preventDefault(); createTrip({ ...booking, listingId: listing.id, listingTitle: listing.title, listingImage: listing.image, location: `${listing.locality}, ${listing.province}` }); setConfirmed(true); };
  return <div className="modal-backdrop checkout-backdrop"><section className="checkout-modal" role="dialog" aria-modal="true" aria-label="Complete your reservation"><button className="modal-close" onClick={onClose} aria-label="Close"><X /></button>{confirmed ? <div className="checkout-success"><CheckCircle2 /><p className="eyebrow">Reservation confirmed</p><h2>Your Philippine escape is on the calendar.</h2><p>Your demo booking is saved under Trips on this device.</p><button className="primary-button" onClick={onClose}>Done</button></div> : <><div className="checkout-summary"><img src={listing.image} alt="" /><div><small>{listing.locality}, {listing.province}</small><h2>{listing.title}</h2><p>{booking.checkIn} → {booking.checkOut} · {booking.guests} guest{booking.guests > 1 ? 's' : ''}</p><strong>{formatPrice(booking.total)} total</strong></div></div><form onSubmit={submit}><h3>Guest details</h3><div className="two-fields"><label>First name<input required autoComplete="given-name" /></label><label>Last name<input required autoComplete="family-name" /></label></div><label>Email<input required type="email" autoComplete="email" /></label><label>Mobile number<input required type="tel" placeholder="+63" autoComplete="tel" /></label><div className="demo-payment"><LockKeyhole /><span><strong>Payment is in demo mode</strong><small>No card details or money will be collected.</small></span></div><button className="primary-button" type="submit">Confirm reservation</button></form></>}</section></div>;
}
