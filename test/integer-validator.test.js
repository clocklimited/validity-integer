var assert = require('assert')
  , validateInteger = require('..')

describe('validity-integer', function () {

  it('should allow integers', function (done) {
    validateInteger('width', 'Width', { width: 10 }, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, null)
      done()
    })
  })

  it('should return validation error if property is undefined', function (done) {

    validateInteger('width', 'Width', {}, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Width must be an integer')
      done()
    })
  })

  it('should return validation error if a property is a float', function (done) {
    validateInteger('width', 'Width', { width: 10.5 }, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Width must be an integer')
      done()
    })
  })

  it('should return validation error if a property is a string', function (done) {
    validateInteger('width', 'Width', { width: '10.5' }, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Width must be an integer')
      done()
    })
  })

  it('should return validation error if a property is an array', function (done) {
    validateInteger('width', 'Width', { width: ['a', 'b'] }, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Width must be an integer')
      done()
    })
  })

  it('should return validation error if a property is an object', function (done) {
    validateInteger('width', 'Width', { width: {} }, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Width must be an integer')
      done()
    })
  })

  it('should return validation error if a property is null', function (done) {
    validateInteger('width', 'Width', { width: null }, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Width must be an integer')
      done()
    })
  })
})
