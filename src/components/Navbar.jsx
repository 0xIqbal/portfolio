import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { navigationItems } from '../data/portfolioData';
import profilePlaceholder from '/profile-placeholder.svg';

const profilePhoto = '/profile.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/75 backdrop-blur-2xl"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('/')}
          className="group flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-purple-400/30 bg-purple-500/15 shadow-neon transition group-hover:scale-105">
            <img
              src={profilePhoto}
              alt="Iqbal Bin Hafiz"
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = profilePlaceholder;
              }}
            />
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">Iqbal Bin Hafiz</p>
            <p className="text-xs uppercase tracking-[0.28em] text-purple-200/70">Portfolio</p>
          </div>
        </button>

        <nav className="hidden items-center gap-2 xl:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive || location.pathname === item.path
                    ? 'bg-purple-500/20 text-white shadow-neon'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-400/40 hover:bg-white/10 xl:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#050816]/95 px-4 pb-4 pt-2 xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    isActive || location.pathname === item.path
                      ? 'border-purple-400/40 bg-purple-500/20 text-white'
                      : 'border-white/10 bg-white/5 text-slate-300 hover:border-purple-400/30 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
