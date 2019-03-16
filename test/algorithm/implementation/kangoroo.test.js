const kangoroo = require('../../../algorithm/implementation/kangoroo');

var input0 = [0,3,4,2]
var input1 = [2,1,1,2]
var input2 = [0,2,5,3]
var input3 = [21,6,47,3]

it(`${input0} equals to YES`, () => {
  expect(kangoroo(input0)).toBe('YES');
});

it(`${input1} equals to YES`, () => {
  expect(kangoroo(input1)).toBe('YES');
});

it(`${input2} equals to NO`, () => {
  expect(kangoroo(input2)).toBe('NO');
});

it(`${input3} equals to NO`, () => {
  expect(kangoroo(input3)).toBe('NO');
});