/**
 * Returns true if value is a string of length > 0,
 * false if otherwise
 * @param {string} value string to be validated
 * @returns {boolean}
 */
const isRequired = (value) => {
  if (typeof value !== 'string') {
    return false;
  }

  if (value.length > 0) {
    return true;
  }

  return false;
};

/**
 * Returns true if value's length >= the specified length]
 * @param {string} value string to be validated
 * @param {number} length minimum length of the string 
 */
const minLength = (value, length) => {
  if (typeof value !== 'string') {
    return false;
  }

  return value.length >= length;
}

module.exports = {
  isRequired,
  minLength,
}
