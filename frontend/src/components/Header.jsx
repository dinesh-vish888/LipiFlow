import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">🖋️</span>
          <span className="header__logo-text">
            Lipi<span>Flow</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className={`header__nav${menuOpen ? ' open' : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              'header__nav-link' + (isActive ? ' active' : '')
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              'header__nav-link' + (isActive ? ' active' : '')
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <button
            className="header__theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className={`header__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
