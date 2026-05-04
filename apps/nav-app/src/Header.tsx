import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'grff-auth-lib';

const LOGIN_URL = '/login';

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

const HouseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: <HouseIcon /> },
  { label: 'Courses', href: '/courses', icon: <BookOpenIcon /> },
  { label: 'Blogs', href: '/blogs', icon: <FileTextIcon /> },
  { label: 'Profile', href: '/profile', icon: <UserIcon /> },
];

function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath.startsWith(href);
}

export function Header() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn, logout } = useSession();

  const updatePath = useCallback(() => {
    setCurrentPath(window.location.pathname);
    setIsOpen(false);
  }, []);

  const handleLogout = useCallback(async () => {
    await logout();
    window.location.href = '/';
  }, [logout]);

  useEffect(() => {
    window.addEventListener('popstate', updatePath);
    window.addEventListener('single-spa:routing-event', updatePath);
    return () => {
      window.removeEventListener('popstate', updatePath);
      window.removeEventListener('single-spa:routing-event', updatePath);
    };
  }, [updatePath]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0614]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 font-bold text-white sm:h-10 sm:w-10">
            G
          </div>
          <span className="text-lg font-bold text-violet-300 sm:text-xl">GRFF</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 transition ${
                isActive(item.href, currentPath)
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white sm:px-6 sm:text-base"
            >
              Logout
            </button>
          ) : (
            <a
              href={LOGIN_URL}
              className="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg sm:px-6 sm:text-base"
            >
              Login
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive(item.href, currentPath)
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}

            {loggedIn ? (
              <button
                onClick={handleLogout}
                className="mt-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                Logout
              </button>
            ) : (
              <a
                href={LOGIN_URL}
                className="mt-2 block rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-3 text-center font-medium text-white shadow-lg"
              >
                Login
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
