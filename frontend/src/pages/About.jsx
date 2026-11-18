import React from 'react';
import './About.css';

const formats = [
  {
    name: 'Unicode (Devanagari)',
    id: 'unicode',
    desc: 'The modern standard encoding for Hindi text. Compatible with all modern systems, browsers, and databases. Example: "नमस्ते"',
    use: 'Web, digital publishing, modern apps',
  },
  {
    name: 'Kruti Dev 010',
    id: 'krutidev',
    desc: 'A legacy ASCII-based font widely used in government offices, newspapers, and print media across India.',
    use: 'Government documents, print media, legacy systems',
  },
  {
    name: 'DevLys',
    id: 'devlys',
    desc: 'Another popular legacy Hindi font family used in older publishing and government workflows.',
    use: 'Desktop publishing, older government workflows',
  },
];

const reasons = [
  { icon: '🚀', title: 'Zero Setup', desc: 'No download or install required. Works instantly in any modern browser.' },
  { icon: '🔒', title: 'Privacy First', desc: 'Your text never leaves your device. All conversion happens locally.' },
  { icon: '🌐', title: 'Open Source', desc: 'Free to use, modify, and contribute. Built for the community.' },
  { icon: '⚙️', title: 'Accurate Engine', desc: 'Carefully crafted character mapping tables for reliable results.' },
];

const steps = [
  { num: '1', label: 'Paste Text', desc: 'Enter or paste your Hindi text into the input field.' },
  { num: '2', label: 'Choose Formats', desc: 'Select the source and target font formats from the dropdowns.' },
  { num: '3', label: 'Convert & Copy', desc: 'Hit Convert and copy or download your result instantly.' },
];

const techStack = [
  { icon: '⚛️', name: 'React + Vite', desc: 'Modern, fast UI with hot-module replacement for development.' },
  { icon: '🧠', name: 'Pure JS Engine', desc: 'Conversion logic runs entirely in vanilla JavaScript—no dependencies.' },
  { icon: '🖥️', name: 'No Server Needed', desc: 'A fully client-side app. Deploy anywhere as static files.' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="about-hero-badge">About</span>
          <h1 className="about-hero-title">LipiFlow</h1>
          <p className="about-hero-subtitle">
            A free, open-source Hindi font conversion tool for the modern web.
          </p>
        </div>
      </section>

      {/* What is LipiFlow */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">What is LipiFlow?</h2>
          <p className="about-section-text">
            LipiFlow is a browser-based Hindi font converter that bridges the gap between legacy font formats like
            Kruti Dev and DevLys and the modern Unicode standard. Millions of Hindi documents across India are still
            encoded in legacy ASCII-based fonts. LipiFlow makes it trivially easy to convert these documents back
            to Unicode—or vice versa—with no server, no login, and no cost. All conversion happens directly on your
            device using a carefully crafted character-mapping engine.
          </p>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="about-section about-section--alt">
        <div className="about-container">
          <h2 className="about-section-title">Supported Formats</h2>
          <p className="about-section-subtitle">LipiFlow supports three major Hindi text encoding formats</p>
          <div className="formats-table-wrap">
            <table className="formats-table">
              <thead>
                <tr>
                  <th>Format</th>
                  <th>Description</th>
                  <th>Common Use</th>
                </tr>
              </thead>
              <tbody>
                {formats.map((f) => (
                  <tr key={f.id}>
                    <td>
                      <span className="format-name">{f.name}</span>
                    </td>
                    <td>{f.desc}</td>
                    <td>
                      <span className="format-use">{f.use}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why LipiFlow */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Why LipiFlow?</h2>
          <p className="about-section-subtitle">Built with real-world needs in mind</p>
          <div className="reasons-grid">
            {reasons.map((r) => (
              <div className="reason-card" key={r.title}>
                <span className="reason-icon">{r.icon}</span>
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="about-section about-section--alt">
        <div className="about-container">
          <h2 className="about-section-title">How It Works</h2>
          <p className="about-section-subtitle">Three simple steps to convert your Hindi text</p>
          <div className="steps-row">
            {steps.map((s, i) => (
              <React.Fragment key={s.num}>
                <div className="step-card">
                  <div className="step-num">{s.num}</div>
                  <h3 className="step-label">{s.label}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
                {i < steps.length - 1 && <div className="step-arrow">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Tech Stack</h2>
          <p className="about-section-subtitle">Lightweight, modern, and dependency-free where it counts</p>
          <div className="tech-grid">
            {techStack.map((t) => (
              <div className="tech-card" key={t.name}>
                <span className="tech-icon">{t.icon}</span>
                <h3 className="tech-name">{t.name}</h3>
                <p className="tech-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
