import { Heart, Luggage, Menu, Search, UserRound, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, usePathname } from '../../app/router';
import { Logo } from '../shared/Logo';

export function MarketplaceHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="market-header">
      <div className="shell market-header__inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation"><NavLink to="/explore">Explore stays</NavLink><NavLink to="/favorites">Favorites</NavLink><NavLink to="/trips">Trips</NavLink></nav>
        <div className="header-actions"><Link className="host-link" to="/host">List your place</Link><button className="profile-button" onClick={() => setOpen((value) => !value)} aria-expanded={open}><Menu /><UserRound /></button></div>
        <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        {open && <div className="account-menu"><Link to="/explore"><Search />Explore stays</Link><Link to="/favorites"><Heart />Favorites</Link><Link to="/trips"><Luggage />Trips</Link><Link to="/host"><UserRound />List your place</Link><button type="button">Sign in <span>Demo</span></button></div>}
      </div>
    </header>
  );
}
