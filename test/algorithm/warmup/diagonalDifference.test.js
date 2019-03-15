const diagonalDifference = require('../../../algorithm/warmup/diagonalDifference');

var input0 = [[11,2,4],[4,5,6],[10,8,-12]]
var input1 = [[1,2,3],[4,5,6],[9,8,9]]
var input2 = [[-1, 1, -7, -8],[-10, -8, -5, -2],[0, 9, 7, -1],[4, 4, -2, 1]]

it(`${input0} equals to 15`, () => {
    expect(diagonalDifference(input0)).toBe(15);
});

it(`${input1} equals to 2`, () => {
    expect(diagonalDifference(input1)).toBe(2);
});

it(`${input2} equals to 1`, () => {
    expect(diagonalDifference(input2)).toBe(1);
});