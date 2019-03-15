const timeConversion = require('../../../algorithm/warmup/timeConversion');

var input0 = '06:40:03AM'
var input1 = '07:05:45PM'
var input2 = '12:45:54PM'
var input3 = '12:40:22AM'

it(`${input0} equals to 06:40:03`, ()=> {
    expect(timeConversion(input0)).toBe('06:40:03')
});
it(`${input1} equals to 19:05:45`, ()=> {
    expect(timeConversion(input1)).toBe('19:05:45')
});
it(`${input2} equals to 12:45:54`, ()=> {
    expect(timeConversion(input2)).toBe('12:45:54')
});
it(`${input3} equals to 00:40:22`, ()=> {
    expect(timeConversion(input3)).toBe('00:40:22')
});