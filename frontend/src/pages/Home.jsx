import React from 'react';
import Hero from '../components/Hero';
import Converter from '../components/Converter';
import HistoryList from '../components/HistoryList';
import './Home.css';

const features = [
  {
    icon: '⚡',
    title: 'Instant Conversion',
    desc: 'Real-time Hindi font conversion in milliseconds',
  },
  {
    icon: '🎯',
    title: 'Accurate Mapping',
    desc: 'Format-specific character mapping for 100% accuracy',
  },
  {
    icon: '📱',
    title: 'Works Everywhere',
    desc: 'Desktop and mobile friendly, no installation needed',
  },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why LipiFlow?</h2>
        <p className="section-subtitle">Everything you need for seamless Hindi font conversion</p>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Converter Section */}
      <section id="converter" className="converter-section">
        <h2 className="section-title">Start Converting</h2>
        <p className="section-subtitle">Paste your text below and choose the formats to convert between</p>
        <Converter />
      </section>

      {/* History Section */}
      <HistoryList />
    </div>
  );
}
