const minMaxSum = require('../../../algorithm/warmup/minMaxSum');

var input0 = [1,3,5,7,9]
var input1 = [1,2,3,4,5]
var input2 = [396285104,573261094,759641832,819230764,364801279]
var input3 = [140638725,436257910,953274816,734065819,362748590]

it(`${input0} equals to 16 24`, () => {
    expect(minMaxSum(input0)).toBe(16+' '+24);
});

it(`${input1} equals to 10 14`, () => {
    expect(minMaxSum(input1)).toBe(10+' '+14);
});

it(`${input2} equals to 2093989309 2548418794`, () => {
    expect(minMaxSum(input2)).toBe(2093989309+' '+2548418794);
});

it(`${input3} equals to 1673711044 2486347135`, () => {
    expect(minMaxSum(input3)).toBe(1673711044+' '+2486347135);
});