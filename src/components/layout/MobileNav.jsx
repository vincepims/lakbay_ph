import { Heart, House, Luggage, Search, UserRound } from 'lucide-react';
import { NavLink } from '../../app/router';

export function MobileNav() {
  return <nav className="mobile-nav" aria-label="Mobile navigation"><NavLink to="/"><House /><span>Home</span></NavLink><NavLink to="/explore"><Search /><span>Explore</span></NavLink><NavLink to="/favorites"><Heart /><span>Saved</span></NavLink><NavLink to="/trips"><Luggage /><span>Trips</span></NavLink><NavLink to="/host"><UserRound /><span>Host</span></NavLink></nav>;
}
