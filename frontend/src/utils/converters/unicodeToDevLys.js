/**
 * DevLys 010 uses practically the same key-mapping and glyph conventions as Kruti Dev 010.
 * In DTP and Hindi publishing, DevLys is a direct equivalent with slight typographical adjustments.
 */
import { unicodeToKrutiDev } from './unicodeToKrutiDev.js';

export function unicodeToDevLys(text) {
  return unicodeToKrutiDev(text);
}
