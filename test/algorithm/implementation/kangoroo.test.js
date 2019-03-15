const kangoroo = require('../../../algorithm/implementation/kangoroo');

var input0 = [0,3,4,2]
var input1 = [2,1,1,2]
var input2 = [0,2,5,3]

test(`${input0} equals to YES`, () => {
  expect(kangoroo(input0)).toBe('YES');
});

test(`${input1} equals to YES`, () => {
  expect(kangoroo(input1)).toBe('YES');
});

test(`${input2} equals to NO`, () => {
  expect(kangoroo(input2)).toBe('YES');
});