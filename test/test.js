// discount.test.js
const assert = require('assert');
const {getDiscountedPrice, evenOrOdd, clock} = require('../main.js');

describe('getDiscountedPrice Function', function() {

  it('should apply 18% discount if cartWeight is more than 10 and discountType is "Weight"', function() {
    const result = getDiscountedPrice(11, 100, 'Weight');
    assert.strictEqual(result, 82); // 100 - 18% = 82
  });

  it('should apply 6% discount if cartWeight is 10 or less and discountType is "Weight"', function() {
    const result = getDiscountedPrice(10, 100, 'Weight');
    assert.strictEqual(result, 94); // 100 - 6% = 94
  });

  it('should apply 12% discount if discountType is "Seasonal"', function() {
    const result = getDiscountedPrice(5, 100, 'Seasonal');
    assert.strictEqual(result, 88); // 100 - 12% = 88
  });

  it('should apply 6% discount if discountType is "Standard"', function() {
    const result = getDiscountedPrice(5, 100, 'Standard');
    assert.strictEqual(result, 94); // 100 - 6% = 94
  });

  it('should return undefined if discountType is not valid', function() {
    const result = getDiscountedPrice(5, 100, 'InvalidType');
    assert.strictEqual(result, undefined); // Function doesn't handle invalid types, so result is undefined
  });
});

describe('evenOrOdd function', () => {
    it("Should return Odd if the number is odd", () => {
        const result = evenOrOdd(1)
        assert.strictEqual(result, 'Odd') 
    })
    it("Should return Even if the number is even", () => {
        const result = evenOrOdd(2)
        assert.strictEqual(result, 'Even') 
    })
    it("Should return Odd if the number is odd", () => {
        const result = evenOrOdd(3)
        assert.strictEqual(result, 'Odd') 
    })
    it("Should return Even if the number is even", () => {
        const result = evenOrOdd(4)
        assert.strictEqual(result, 'Even') 
    })
});

describe('clock function', () => {
    it("Should return time in milliseconds", () => {
        const result = clock(0,0,0)
        assert.strictEqual(result, 0)
    })
    it("Should return time in milliseconds", () => {
        const result = clock(0,1,1)
        assert.strictEqual(result, 61000)
    })
    it("Should return time in milliseconds", () => {
        const result = clock(1,0,0)
        assert.strictEqual(result, 3600000)
    })
    it("Should return time in milliseconds", () => {
        const result = clock(1,0,1)
        assert.strictEqual(result, 3601000)
    })
    it("Should return time in milliseconds", () => {
        const result = clock(1,1,1)
        assert.strictEqual(result, 3661000)
    })
})
