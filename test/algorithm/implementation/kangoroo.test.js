const kangoroo = require('../../../algorithm/implementation/kangoroo');

test('[1,3,2,4] equals to YES', () => {
  expect(kangoroo([1,3,2,4])).toBe('YES');
});