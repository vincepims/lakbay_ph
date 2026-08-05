import { CalendarDays, MapPin, Search, UsersRound } from 'lucide-react';
import { useState } from 'react';
import { useMarketplace } from '../../context/MarketplaceContext';
import { locationHierarchy } from '../../data/marketplaceData';
import { navigate } from '../../app/router';

export function SearchBar({ elevated = false }) {
  const { filters, updateFilters } = useMarketplace();
  const [draft, setDraft] = useState(filters.query);
  const localities = filters.province ? locationHierarchy.find((item) => item.province === filters.province)?.localities || [] : [];
  const submit = (event) => { event.preventDefault(); updateFilters({ query: draft }); navigate('/explore'); };
  return (
    <form className={`search-bar ${elevated ? 'search-bar--elevated' : ''}`} onSubmit={submit}>
      <label className="search-field-group search-field-group--destination"><MapPin /><span><small>Where</small><input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Search the Philippines" /></span></label>
      <label className="search-field-group"><span><small>Province</small><select value={filters.province} onChange={(event) => updateFilters({ province: event.target.value, locality: '' })}><option value="">Anywhere</option>{locationHierarchy.map((item) => <option key={item.province}>{item.province}</option>)}</select></span></label>
      <label className="search-field-group"><span><small>City / Municipality</small><select value={filters.locality} disabled={!filters.province} onChange={(event) => updateFilters({ locality: event.target.value })}><option value="">Any locality</option>{localities.map((locality) => <option key={locality}>{locality}</option>)}</select></span></label>
      <label className="search-field-group search-field-group--dates"><CalendarDays /><span><small>When</small><input type="text" value="Add dates" readOnly /></span></label>
      <label className="search-field-group search-field-group--guests"><UsersRound /><span><small>Guests</small><select value={filters.guests} onChange={(event) => updateFilters({ guests: Number(event.target.value) })}>{[1,2,3,4,5,6,8,10].map((count) => <option value={count} key={count}>{count} {count === 1 ? 'guest' : 'guests'}</option>)}</select></span></label>
      <button className="search-submit" type="submit"><Search /><span>Search</span></button>
    </form>
  );
}
