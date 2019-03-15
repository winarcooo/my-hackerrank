const kangoroo = require('../../../algorithm/implementation/kangoroo');

var arrInput = [0, 2, 5, 3]

test('[0, 2, 5, 3] equals to NO', () => {
  expect(aVeryBigSum(arrInput)).toBe(5000000015);
});