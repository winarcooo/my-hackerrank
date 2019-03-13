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
var result = gradingStudent(input)
console.log(result)