const { expect } = require('chai');
const { hexToRgb } = require('../src/hexToRgb');

describe('hexToRgb (unit tests)', () => {
  it('converts a hex value with # to RGB channels', () => {
    expect(hexToRgb('#FF8800')).to.deep.equal({ r: 255, g: 136, b: 0 });
  });
  it('accepts six digits without # and lower-case letters', () => {
    expect(hexToRgb('00aaff')).to.deep.equal({ r: 0, g: 170, b: 255 });
  });
  it('converts black and white boundary values', () => {
    expect(hexToRgb('#000000')).to.deep.equal({ r: 0, g: 0, b: 0 });
    expect(hexToRgb('FFFFFF')).to.deep.equal({ r: 255, g: 255, b: 255 });
  });
  it('rejects malformed hex strings', () => {
    expect(() => hexToRgb('#FFF')).to.throw('exactly 6 hexadecimal digits');
    expect(() => hexToRgb('GGGGGG')).to.throw('exactly 6 hexadecimal digits');
    expect(() => hexToRgb('')).to.throw('exactly 6 hexadecimal digits');
  });
  it('rejects non-string input', () => {
    expect(() => hexToRgb(123456)).to.throw(TypeError, 'must be a string');
  });
});
