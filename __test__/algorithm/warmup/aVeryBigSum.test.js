const aVeryBigSum = require('../../../algorithm/warmup/aVeryBigSum');

var arrInput0 = [1000000001,1000000002,1000000003,1000000004,1000000005]
var arrInput1 = [1001458909,1004570889,1007019111,1003302837,1002514638,1006431461,1002575010,1007514041,1007548981,1004402249]

test(`${arrInput0} equals to 5000000015`, () => {
  expect(aVeryBigSum(arrInput0)).toBe(5000000015);
});

test(`${arrInput1} equals to 10047338126`, () => {
  expect(aVeryBigSum(arrInput1)).toBe(10047338126);
});