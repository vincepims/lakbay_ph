import { Camera, MessageCircle, Send, Users } from 'lucide-react';
import { Link } from '../../app/router';
import { Logo } from '../shared/Logo';

export function MarketplaceFooter() {
  return (
    <footer className="market-footer"><div className="shell footer-grid"><div className="footer-brand"><Logo inverse /><p>Distinctive places to stay, thoughtfully discovered across the Philippines.</p><div className="footer-social"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Camera /></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><MessageCircle /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Users /></a></div></div><div><h3>Discover</h3><Link to="/explore">Explore stays</Link><Link to="/favorites">Saved homes</Link><Link to="/trips">Your trips</Link></div><div><h3>Host</h3><Link to="/host">List your place</Link><Link to="/host">Hosting resources</Link><Link to="/host">Host community</Link></div><div className="footer-newsletter"><h3>Travel inspiration</h3><p>New places and local stories, occasionally.</p><form onSubmit={(event) => event.preventDefault()}><input aria-label="Email address" type="email" placeholder="Email address" /><button aria-label="Subscribe"><Send /></button></form></div></div><div className="shell footer-legal"><span>© 2026 Lakbay Philippines</span><span>Demo marketplace · Prices shown in PHP</span></div></footer>
  );
}
