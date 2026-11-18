import { Link } from 'react-router-dom';
import './Footer.css';

const SUPPORTED_FONTS = [
  { name: 'Unicode Hindi', badge: 'Standard' },
  { name: 'Kruti Dev 010', badge: 'Legacy' },
  { name: 'DevLys', badge: 'Legacy' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand column */}
          <div>
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">🖋️</span>
              <span className="footer__logo-name">
                Lipi<span>Flow</span>
              </span>
            </Link>
            <p className="footer__tagline">Every Script, One Platform</p>
            <p className="footer__about-desc">
              LipiFlow is a free, browser-based Hindi font converter. Instantly convert
              between Unicode Hindi, Kruti Dev, and DevLys — no installation, no data uploaded.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="/#converter">Converter</a></li>
            </ul>
          </div>

          {/* Supported Fonts */}
          <div>
            <h4 className="footer__col-title">Supported Fonts</h4>
            <ul className="footer__font-list">
              {SUPPORTED_FONTS.map((f) => (
                <li key={f.name} className="footer__font-item">
                  <span className="footer__font-badge">{f.badge}</span>
                  {f.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <span className="footer__copy">© 2026 LipiFlow. Made with ❤️ for Hindi users.</span>
          <span className="footer__made">Open source • Free forever</span>
        </div>
      </div>
    </footer>
  );
}
