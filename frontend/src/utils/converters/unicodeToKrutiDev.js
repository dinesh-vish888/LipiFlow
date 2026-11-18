/**
 * Production-tested Unicode to Kruti Dev 010 / DevLys 010 converter.
 * Includes precise handling for conjuncts, half-characters, 'f' (chhoti-i) shifting, and 'Z' (reph).
 */

const array_one = [
  "‘", "’", "“", "”", "(", ")", "{", "}", "=", "।", "?", "-", "µ", "॰", ",", ".", "् ",
  "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "x",
  "फ़्", "क़", "ख़", "ग़", "ज़्", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ", "ऩ",
  "त्त्", "त्त", "क्त", "दृ", "कृ",
  "ह्न", "ह्य", "हृ", "ह्म", "ह्र", "ह्", "द्द", "क्ष्", "क्ष", "त्र्", "त्र", "ज्ञ",
  "छ्य", "ट्य", "ठ्य", "ड्य", "ढ्य", "द्य", "द्व",
  "श्र", "ट्र", "ड्र", "ढ्र", "छ्र", "क्र", "फ्र", "द्र", "प्र", "ग्र", "रु", "रू",
  "्र",
  "ओ", "औ", "आ", "अ", "ई", "इ", "उ", "ऊ", "ऐ", "ए", "ऋ",
  "क्", "क", "क्क", "ख्", "ख", "ग्", "ग", "घ्", "घ", "ङ",
  "चै", "च्", "च", "छ", "ज्", "ज", "झ्", "झ", "ञ",
  "ट्ट", "ट्ठ", "ट", "ठ", "ड्ड", "ड्ढ", "ड", "ढ", "ण्", "ण",
  "त्", "त", "थ्", "थ", "द्ध", "द", "ध्", "ध", "न्", "न",
  "प्", "प", "फ्", "फ", "ब्", "ब", "भ्", "भ", "म्", "म",
  "य्", "य", "र", "ल्", "ल", "ळ", "व्", "व",
  "श्", "श", "ष्", "ष", "स्", "स", "ह",
  "ऑ", "ॉ", "ो", "ौ", "ा", "ी", "ु", "ू", "ृ", "े", "ै",
  "ं", "ँ", "ः", "ॅ", "ऽ", "् ", "्"
];

const array_two = [
  "^", "*", "Þ", "ß", "¼", "½", "¿", "À", "¾", "A", "\\", "&", "&", "Œ", "]", "-", "~ ",
  "å", "ƒ", "„", "…", "†", "‡", "ˆ", "‰", "Š", "‹", "Û",
  "¶", "d", "[k", "x", "T", "t", "M+", "<+", "Q", ";", "j", "u",
  "Ù", "Ùk", "Dr", "–", "—",
  "à", "á", "â", "ã", "ºz", "º", "í", "{", "{k", "«", "=", "K",
  "Nî", "Vî", "Bî", "Mî", "<î", "|", "}",
  "J", "Vª", "Mª", "<ªª", "Nª", "Ø", "Ý", "æ", "ç", "xz", "#", ":",
  "z",
  "vks", "vkS", "vk", "v", "bZ", "b", "m", "Å", ",s", ",", "_",
  "D", "d", "ô", "[", "[k", "X", "x", "?", "?k", "³",
  "pkS", "P", "p", "N", "T", "t", "÷", ">", "¥",
  "ê", "ë", "V", "B", "ì", "ï", "M", "<", ".", ".k",
  "R", "r", "F", "Fk", ")", "n", "/", "/k", "U", "u",
  "I", "i", "¶", "Q", "C", "c", "H", "Hk", "E", "e",
  "¸", ";", "j", "Y", "y", "G", "O", "o",
  "'", "'k", "\"", "\"k", "L", "l", "g",
  "v‚", "‚", "ks", "kS", "k", "h", "q", "w", "`", "s", "S",
  "a", "¡", "%", "W", "·", "~ ", "~"
];

export function unicodeToKrutiDev(text) {
  if (!text) return '';

  let modified_substring = text;

  // Standardize two-byte nukta representations
  modified_substring = modified_substring.replace(/क़/g, "क़");
  modified_substring = modified_substring.replace(/ख़‌/g, "ख़");
  modified_substring = modified_substring.replace(/ग़/g, "ग़");
  modified_substring = modified_substring.replace(/ज़/g, "ज़");
  modified_substring = modified_substring.replace(/ड़/g, "ड़");
  modified_substring = modified_substring.replace(/ढ़/g, "ढ़");
  modified_substring = modified_substring.replace(/ऩ/g, "ऩ");
  modified_substring = modified_substring.replace(/फ़/g, "फ़");
  modified_substring = modified_substring.replace(/य़/g, "य़");
  modified_substring = modified_substring.replace(/ऱ/g, "ऱ");

  // Reorder chhoti-ee ki maatra ("ि") to come before the consonant / cluster ("f")
  let position_of_f = modified_substring.indexOf("ि");
  while (position_of_f !== -1) {
    let character_left_to_f = modified_substring.charAt(position_of_f - 1);
    modified_substring = modified_substring.replace(
      character_left_to_f + "ि",
      "f" + character_left_to_f
    );
    position_of_f = position_of_f - 1;

    // In case of conjunct / half-character before it: continue moving 'f' to the front
    while (modified_substring.charAt(position_of_f - 1) === "्" && position_of_f !== 0) {
      let string_to_be_replaced = modified_substring.charAt(position_of_f - 2) + "्";
      modified_substring = modified_substring.replace(
        string_to_be_replaced + "f",
        "f" + string_to_be_replaced
      );
      position_of_f = position_of_f - 2;
    }
    position_of_f = modified_substring.indexOf("ि", position_of_f + 1);
  }

  // Eliminating "र्" (half R / reph) and placing 'Z' in appropriate location
  const set_of_matras = "ािीुूृेैोौं:ँॅ";
  modified_substring += '  ';

  let position_of_half_R = modified_substring.indexOf("र्");
  while (position_of_half_R > 0) {
    let probable_position_of_Z = position_of_half_R + 2;
    let character_right_to_probable_position_of_Z = modified_substring.charAt(probable_position_of_Z + 1);

    while (set_of_matras.indexOf(character_right_to_probable_position_of_Z) !== -1) {
      probable_position_of_Z = probable_position_of_Z + 1;
      character_right_to_probable_position_of_Z = modified_substring.charAt(probable_position_of_Z + 1);
    }

    let string_to_be_replaced = modified_substring.substr(
      position_of_half_R + 2,
      probable_position_of_Z - position_of_half_R - 1
    );
    modified_substring = modified_substring.replace(
      "र्" + string_to_be_replaced,
      string_to_be_replaced + "Z"
    );
    position_of_half_R = modified_substring.indexOf("र्");
  }

  modified_substring = modified_substring.substr(0, modified_substring.length - 2);

  // Substitute elements from array_one to array_two
  for (let input_symbol_idx = 0; input_symbol_idx < array_one.length; input_symbol_idx++) {
    let target = array_one[input_symbol_idx];
    let replacement = array_two[input_symbol_idx];
    let idx = modified_substring.indexOf(target);
    while (idx !== -1) {
      modified_substring = modified_substring.replace(target, replacement);
      idx = modified_substring.indexOf(target);
    }
  }

  return modified_substring;
}
