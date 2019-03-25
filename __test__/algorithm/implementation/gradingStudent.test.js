const gradingStudent = require('../../../algorithm/implementation/gradingStudent');

var input0 = [73,67,38,33]
var input1 = [37,38]

test(`${input0} equals to [75,67,40,33]`, () => {
    expect(gradingStudent(input0)).toEqual([75,67,40,33]);
});
  
test(`${input1} equals to [37,40]`, () => {
    expect(gradingStudent(input1)).toEqual([37,40]);
});
