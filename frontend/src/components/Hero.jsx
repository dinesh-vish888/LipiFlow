import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToConverter = () => {
    const el = document.getElementById('converter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <span className="hero-badge">⚡ Free • Fast • Accurate</span>
        <h1 className="hero-title">
          Hindi Font Conversion, <span className="highlight">Simplified</span>
        </h1>
        <p className="hero-hindi">हिंदी फॉन्ट कनवर्टर — यूनिकोड, कृति देव और डेवलीस</p>
        <p className="hero-desc">
          LipiFlow empowers publishers, DTP operators, and creators to seamlessly convert Hindi text across legacy formats with zero character corruption.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary hero-btn" onClick={scrollToConverter}>
            Start Converting →
          </button>
          <a href="/about" className="btn btn-outline hero-btn">
            Learn More
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Core Formats</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client-Side Safe</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">Zero</span>
            <span className="stat-label">Installation Needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
