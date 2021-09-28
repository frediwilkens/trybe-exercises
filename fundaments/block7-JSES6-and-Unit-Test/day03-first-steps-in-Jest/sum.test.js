const sum = require('./sum');

describe('sum Function', () => {
  it ('4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it ('0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it ('Lança um erro quando não é número', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it ('O erro é "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5')
    }).toThrowError(new Error('parameters must be numbers'));
  });
})