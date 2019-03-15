const birthdayCake = require('../../../algorithm/warmup/birthdayCake');

var arrInput0 = [3, 2, 1, 3]
var arrInput1 = [18,90,90,13,90,75,90,8,90,43]
var arrInput2 = [44,53,31,27,77,60,66,77,26,36]

it(`${arrInput0} equals to 2`, () => {
  expect(birthdayCake(arrInput0)).toBe(2);
});
it(`${arrInput1} equals to 10`, () => {
  expect(birthdayCake(arrInput1)).toBe(5);
});
it(`${arrInput2} equals to 2`, () => {
    expect(birthdayCake(arrInput2)).toBe(2);
});