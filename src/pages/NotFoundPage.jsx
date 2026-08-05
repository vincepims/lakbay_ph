import { Compass } from 'lucide-react';
import { Link } from '../app/router';

export function NotFoundPage() { return <section className="simple-empty shell"><Compass /><p className="eyebrow">404</p><h1>This path is off the map.</h1><p>Let’s get you back to discovering somewhere beautiful.</p><Link className="primary-button" to="/explore">Explore stays</Link></section>; }
