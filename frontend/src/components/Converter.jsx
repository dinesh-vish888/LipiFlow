import React, { useState } from 'react';
import FontSelector from './FontSelector';
import TextEditor from './TextEditor';
import { convert, FORMATS } from '../utils/conversionEngine';
import { downloadTextFile } from '../utils/validationUtils';
import { useApp } from '../context/AppContext';
import './Converter.css';

export default function Converter() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [fromFormat, setFromFormat] = useState('unicode');
  const [toFormat, setToFormat] = useState('krutidev');
  const [isConverting, setIsConverting] = useState(false);

  const { showToast, addHistory } = useApp();

  const handleConvert = () => {
    if (!inputText.trim()) {
      showToast('Please enter some text to convert', 'error');
      return;
    }

    setIsConverting(true);
    try {
      const result = convert(inputText, fromFormat, toFormat);
      setOutputText(result);
      addHistory({
        from: fromFormat,
        to: toFormat,
        inputPreview: inputText.slice(0, 60),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
      showToast('Converted successfully!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Conversion failed. Check text encoding.', 'error');
    } finally {
      setIsConverting(false);
    }
  };

  const handleSwap = () => {
    const tempFormat = fromFormat;
    setFromFormat(toFormat);
    setToFormat(tempFormat);

    if (outputText) {
      setInputText(outputText);
      setOutputText('');
    }
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  const handleDownload = () => {
    if (!outputText) return;
    downloadTextFile(outputText, `lipiflow-${toFormat}.txt`);
    showToast('Download started', 'success');
  };

  return (
    <div className="converter-wrapper">
      {/* Format Selectors & Controls Bar */}
      <div className="controls-card">
        <FontSelector
          label="Source Font (इनपुट फॉन्ट)"
          value={fromFormat}
          onChange={setFromFormat}
          formats={FORMATS}
        />

        <button
          type="button"
          className="swap-btn"
          onClick={handleSwap}
          title="Swap source and destination formats"
        >
          ⇄
        </button>

        <FontSelector
          label="Destination Font (आउटपुट फॉन्ट)"
          value={toFormat}
          onChange={setToFormat}
          formats={FORMATS}
        />
      </div>

      {/* Two Column Editor Panels */}
      <div className="editor-grid">
        <TextEditor
          label="Input Hindi Text"
          value={inputText}
          onChange={setInputText}
          placeholder="यहाँ अपना हिंदी टेक्स्ट लिखें या पेस्ट करें..."
          fontFormat={fromFormat}
          onClear={handleClear}
        />

        <TextEditor
          label="Converted Result"
          value={outputText}
          readOnly={true}
          placeholder="परिवर्तित टेक्स्ट यहाँ दिखाई देगा..."
          fontFormat={toFormat}
        />
      </div>

      {/* Main Conversion CTA bar */}
      <div className="converter-actions-bar">
        <button
          type="button"
          className="btn btn-primary convert-cta-btn"
          onClick={handleConvert}
          disabled={isConverting}
        >
          {isConverting ? 'Converting...' : 'Convert Now (रूपांतरित करें) →'}
        </button>

        {outputText && (
          <button
            type="button"
            className="btn btn-outline download-cta-btn"
            onClick={handleDownload}
          >
            💾 Download as .TXT
          </button>
        )}
      </div>
    </div>
  );
}
