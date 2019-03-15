const aVeryBigSum = require('../../../algorithm/warmup/aVeryBigSum');

var arrInput = [1000000001,1000000002,1000000003,1000000004,1000000005]

test('[1000000001,1000000002,1000000003,1000000004,1000000005] equals to 5000000015', () => {
  expect(aVeryBigSum(arrInput)).toBe(5000000015);
});