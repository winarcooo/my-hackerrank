const appleAndOrange = require('../../../algorithm/implementation/appleAndOrange');

/*
s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
*/
var s = 7
var t = 10
var a = 4
var b = 12
var apples0 = [2, 3, -4]
var oranges0 = [3, -2, -4]

var apples1 = [4, 1, 3]
var oranges1 = [1, -3, 2]

it(`${apples0} and ${oranges0} equals to 1 & 2`, () => {
    expect(appleAndOrange(s, t, a, b, apples0, oranges0)).toEqual(1 +'\n'+ 2);
});

it(`${apples1} and ${oranges1} equals to 2 & 1`, () => {
    expect(appleAndOrange(s, t, a, b, apples1, oranges1)).toEqual(2 +'\n'+ 1);
});