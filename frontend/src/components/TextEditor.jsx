import React from 'react';
import { getCharCount, getWordCount, copyToClipboard } from '../utils/validationUtils';
import { useApp } from '../context/AppContext';
import './TextEditor.css';

export default function TextEditor({
  label,
  value,
  onChange,
  placeholder,
  readOnly = false,
  fontFormat = 'unicode',
  onClear,
}) {
  const { showToast } = useApp();

  const handleCopy = async () => {
    if (!value) return;
    try {
      await copyToClipboard(value);
      showToast('Copied to clipboard!', 'success');
    } catch (e) {
      showToast('Failed to copy', 'error');
    }
  };

  const handlePaste = async () => {
    if (readOnly || !navigator.clipboard) return;
    try {
      const text = await navigator.clipboard.readText();
      if (onChange) onChange(text);
      showToast('Pasted from clipboard!', 'success');
    } catch (e) {
      showToast('Failed to paste', 'error');
    }
  };

  const isHindiFont = fontFormat === 'unicode';

  return (
    <div className="editor-card">
      <div className="editor-header">
        <span className="editor-title">{label}</span>
        <div className="editor-actions">
          {!readOnly && (
            <>
              <button type="button" className="action-btn" onClick={handlePaste} title="Paste">
                📋 Paste
              </button>
              <button type="button" className="action-btn" onClick={onClear} title="Clear">
                ✕ Clear
              </button>
            </>
          )}
          {value && (
            <button type="button" className="action-btn" onClick={handleCopy} title="Copy text">
              📑 Copy
            </button>
          )}
        </div>
      </div>

      <textarea
        className={`editor-textarea ${isHindiFont ? 'font-hindi-style' : 'font-legacy-style'}`}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={10}
      />

      <div className="editor-footer">
        <span className="editor-stat">Chars: <strong>{getCharCount(value)}</strong></span>
        <span className="editor-stat">Words: <strong>{getWordCount(value)}</strong></span>
        <span className="editor-format-tag">{fontFormat.toUpperCase()}</span>
      </div>
    </div>
  );
}
