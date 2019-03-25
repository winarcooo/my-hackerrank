const newYearChaos = require('../../../interviewPrepKit/arrays/newYearChaos');

var input0 = [2, 1, 5, 3, 4]
var input1 = [2, 5, 1, 3, 4]
var input2 = [5, 1, 2, 3, 7, 8, 6, 4]
var input3 = [1, 2, 5, 3, 7, 8, 6, 4]

it(`${input0} should return => 3`, () => {
    expect(newYearChaos(input0)).toEqual(3);
});
  
it(`${input1} should return => 'Too Chaotic'`, () => {
    expect(newYearChaos(input1)).toEqual("Too Chaotic");
});

it(`${input2} should return => 'Too Chaotic'`, () => {
    expect(newYearChaos(input2)).toEqual("Too Chaotic");
});

it(`${input3} should return => 7`, () => {
    expect(newYearChaos(input3)).toEqual(7);
});