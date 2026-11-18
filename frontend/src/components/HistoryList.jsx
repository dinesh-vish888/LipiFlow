import React from 'react';
import { useApp } from '../context/AppContext';
import './HistoryList.css';

export default function HistoryList() {
  const { conversionHistory, clearHistory } = useApp();

  if (!conversionHistory || conversionHistory.length === 0) {
    return null;
  }

  return (
    <section className="history-section">
      <div className="history-container">
        <div className="history-header">
          <h3 className="history-title">Recent Conversions (हालिया रूपांतरण)</h3>
          <button type="button" className="clear-history-btn" onClick={clearHistory}>
            Clear History
          </button>
        </div>

        <div className="history-list">
          {conversionHistory.map((item, index) => (
            <div className="history-item" key={index}>
              <div className="history-meta">
                <span className="badge badge-primary">
                  {item.from.toUpperCase()} → {item.to.toUpperCase()}
                </span>
                <span className="history-time">{item.timestamp}</span>
              </div>
              <p className="history-preview">"{item.inputPreview}..."</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
