import { Link } from '../../app/router';

export function Logo({ inverse = false }) {
  return <Link to="/" className={`logo ${inverse ? 'logo--inverse' : ''}`} aria-label="Lakbay PH home"><img src="/assets/lakbay-mark.svg" alt="" /><strong>LAKBAY</strong><small>PH</small></Link>;
}
