import { MarketplaceFooter } from './MarketplaceFooter';
import { MarketplaceHeader } from './MarketplaceHeader';
import { MobileNav } from './MobileNav';

export function MarketplaceLayout({ children }) {
  return <div className="market-app"><MarketplaceHeader /><main>{children}</main><MarketplaceFooter /><MobileNav /></div>;
}
