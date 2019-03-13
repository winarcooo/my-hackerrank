const { performance } = require('perf_hooks');

function gradingStudent(arr) {
    var result = arr.map(roundMultiplyFive)

    function roundMultiplyFive(grade) {
        if (grade < 38) return grade
        var modulus = grade % 5
        if(modulus >= 3) {
            grade += 5 - modulus
            return grade
        } else {
            return grade
        }
    };
    
    return result
}

var input = [73,67,38,33]

var t0 = performance.now();
var result = gradingStudent(input)
var t1 = performance.now();

console.log("execution times " + (t1 - t0) + " milliseconds.")
console.log(result)