import React from 'react';
import './FontSelector.css';

export default function FontSelector({ label, value, onChange, formats = [], disabled = false }) {
  return (
    <div className="font-selector-wrapper">
      <label className="font-selector-label">{label}</label>
      <div className="select-container">
        <select
          className="font-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          {formats.map((f) => (
            <option key={f.id} value={f.id}>
              {f.name} — ({f.desc})
            </option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>
    </div>
  );
}
