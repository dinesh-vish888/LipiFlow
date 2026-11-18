import { unicodeToKrutiDev } from './converters/unicodeToKrutiDev.js';
import { krutiDevToUnicode } from './converters/krutiDevToUnicode.js';
import { unicodeToDevLys } from './converters/unicodeToDevLys.js';
import { devLysToUnicode } from './converters/devLysToUnicode.js';

export const FORMATS = [
  { id: 'unicode', name: 'Unicode Hindi', desc: 'मानक यूनिकोड (Standard)' },
  { id: 'krutidev', name: 'Kruti Dev 010', desc: 'लोकप्रिय DTP फॉन्ट (Legacy)' },
  { id: 'devlys', name: 'DevLys 010', desc: 'DTP & टाइपिंग फॉन्ट (Legacy)' }
];

export function convert(text, fromFormat, toFormat) {
  if (!text || text.trim() === '') return '';
  if (fromFormat === toFormat) return text;

  // Direct conversions
  if (fromFormat === 'unicode' && toFormat === 'krutidev') {
    return unicodeToKrutiDev(text);
  }
  if (fromFormat === 'krutidev' && toFormat === 'unicode') {
    return krutiDevToUnicode(text);
  }
  if (fromFormat === 'unicode' && toFormat === 'devlys') {
    return unicodeToDevLys(text);
  }
  if (fromFormat === 'devlys' && toFormat === 'unicode') {
    return devLysToUnicode(text);
  }

  // Legacy to Legacy (via Unicode)
  if (fromFormat === 'krutidev' && toFormat === 'devlys') {
    const unicodeText = krutiDevToUnicode(text);
    return unicodeToDevLys(unicodeText);
  }
  if (fromFormat === 'devlys' && toFormat === 'krutidev') {
    const unicodeText = devLysToUnicode(text);
    return unicodeToKrutiDev(unicodeText);
  }

  return text;
}
