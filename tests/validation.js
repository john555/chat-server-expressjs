const { expect } = require('chai');
const { isRequired, minLength } =  require('../helpers/validation');

describe('helpers/validation', () => {
  describe('isRequired helper', () => {
    it('should return false if value is empty', () => {
      expect(isRequired('')).to.equals(false);
      expect(isRequired(22)).to.equals(false);
      expect(isRequired(null)).to.equals(false);
      expect(isRequired(undefined)).to.equals(false);
    });
  
    it('should return true if value is provided', () => {
      expect(isRequired('yeah')).to.equals(true);
    });
  });

  describe('minLength helper', () => {
    it('should return false if string length is < minLength', () => {
      expect(minLength('pass', 8)).to.equals(false);
      expect(minLength(7474, 8)).to.equals(false);
    });

    it('should return true if string length is >= specified length', () => {
      expect(minLength('password', 8)).to.equals(true);
      expect(minLength('password123', 8)).to.equals(true);
    })
  });
});

