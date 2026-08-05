import { useEffect, useState } from 'react';

export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  useEffect(() => {
    const update = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);
  return pathname;
}

export function navigate(to) {
  if (to === window.location.pathname) return;
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function Link({ to, children, className, onClick, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(to);
  };
  return <a href={to} className={className} onClick={handleClick} {...props}>{children}</a>;
}

export function NavLink({ to, end = false, children, className = '', ...props }) {
  const pathname = usePathname();
  const active = end ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
  return <Link to={to} className={`${className} ${active ? 'active' : ''}`.trim()} {...props}>{children}</Link>;
}
