var validity = require('validity')

module.exports = validity.createValidatorAllowingFailureMessageOverride(
  validity.booleanToCallback(integerValidator), '#{name} must be an integer')

function integerValidator (value) {

  // Returns false if value is not a number or an integer
  if (typeof value !== 'number' || value % 1 !== 0) {
    return false
  }

  return true
}
