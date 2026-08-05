import { CalendarDays, ChevronDown, ShieldCheck, UsersRound } from 'lucide-react';
import { useMemo, useState } from 'react';
import { formatPrice } from '../listings/ListingCard';
import { CheckoutModal } from './CheckoutModal';

const dateString = (daysFromNow) => { const date = new Date(); date.setDate(date.getDate() + daysFromNow); return date.toISOString().slice(0, 10); };

export function BookingCard({ listing }) {
  const [checkIn, setCheckIn] = useState(dateString(14));
  const [checkOut, setCheckOut] = useState(dateString(17));
  const [guests, setGuests] = useState(1);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const nights = useMemo(() => Math.max(1, Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000) || 1), [checkIn, checkOut]);
  const serviceFee = Math.round(listing.price * nights * .09);
  const total = listing.price * nights + serviceFee;
  return <><aside className="booking-card"><div className="booking-card__headline"><span><strong>{formatPrice(listing.price)}</strong> night</span><span>★ {listing.rating} · {listing.reviews} reviews</span></div><div className="booking-inputs"><label><CalendarDays /><span><small>Check in</small><input type="date" min={dateString(1)} value={checkIn} onChange={(event) => setCheckIn(event.target.value)} /></span></label><label><span><small>Check out</small><input type="date" min={checkIn} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} /></span></label><label className="booking-guests"><UsersRound /><span><small>Guests</small><select value={guests} onChange={(event) => setGuests(Number(event.target.value))}>{Array.from({ length: listing.guests }, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} guest{count > 1 ? 's' : ''}</option>)}</select></span><ChevronDown /></label></div><button className="primary-button booking-button" onClick={() => setCheckoutOpen(true)}>Reserve</button><p className="booking-note">You won’t be charged yet</p><div className="price-lines"><div><span>{formatPrice(listing.price)} × {nights} nights</span><span>{formatPrice(listing.price * nights)}</span></div><div><span>Service fee</span><span>{formatPrice(serviceFee)}</span></div><div className="price-total"><strong>Total</strong><strong>{formatPrice(total)}</strong></div></div><div className="secure-note"><ShieldCheck />Secure booking demo</div></aside>{checkoutOpen && <CheckoutModal listing={listing} booking={{ checkIn, checkOut, guests, nights, serviceFee, total }} onClose={() => setCheckoutOpen(false)} />}</>;
}
