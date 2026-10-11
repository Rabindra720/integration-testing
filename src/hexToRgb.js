/**
 * Convert a six-digit hexadecimal colour to RGB integer channels.
 * Accepts an optional leading #; shorthand hex and alpha channels are not supported.
 * @param {string} hex - Colour such as "#FF8800" or "FF8800".
 * @returns {{r:number,g:number,b:number}} RGB channels in the range 0–255.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the value is not exactly six hexadecimal digits.
 */
function hexToRgb(hex) {
  if (typeof hex !== 'string') throw new TypeError('Hex colour must be a string');
  const value = hex.startsWith('#') ? hex.slice(1) : hex;
  if (!/^[0-9a-fA-F]{6}$/.test(value)) {
    throw new Error('Hex colour must contain exactly 6 hexadecimal digits');
  }
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}
module.exports = { hexToRgb };
