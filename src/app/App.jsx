import { useEffect } from 'react';
import { MarketplaceLayout } from '../components/layout/MarketplaceLayout';
import { ExplorePage } from '../pages/ExplorePage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { HomePage } from '../pages/HomePage';
import { HostPage } from '../pages/HostPage';
import { ListingPage } from '../pages/ListingPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { TripsPage } from '../pages/TripsPage';
import { usePathname } from './router';

function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

export function App() {
  const pathname = usePathname();
  let page = <NotFoundPage />;
  if (pathname === '/') page = <HomePage />;
  else if (pathname === '/explore') page = <ExplorePage />;
  else if (pathname === '/favorites') page = <FavoritesPage />;
  else if (pathname === '/trips') page = <TripsPage />;
  else if (pathname === '/host') page = <HostPage />;
  else if (pathname.startsWith('/stays/')) page = <ListingPage slug={decodeURIComponent(pathname.slice('/stays/'.length))} />;

  return <MarketplaceLayout><ScrollToTop />{page}</MarketplaceLayout>;
}
