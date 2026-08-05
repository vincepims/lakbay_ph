import { MapPinned } from 'lucide-react';
import { Link } from '../../app/router';

export function Logo({ inverse = false }) {
  return <Link to="/" className={`logo ${inverse ? 'logo--inverse' : ''}`} aria-label="Lakbay home"><span><MapPinned /></span><strong>lakbay</strong><small>PH</small></Link>;
}
