function newYearChaos(arr) {
    var head = 0
    var tail = arr.length - 1
    var counter = 0
    var temp = 0

    for (var index = head; index <= tail; index++) {

        // if (!(arr.indexOf(arr[index]) >= (arr[index]-1)-2)) {
        //     return 'Too Chaotic'
        // }
        
        if (arr[index] != index + 1) {
            let indexTarget = arr.indexOf(index+1)

            temp = arr[index]
            arr[index] = arr[indexTarget]
            arr[indexTarget] = temp
            counter++
        }
    }

    return counter
}

var input0 = [2, 1, 5, 3, 4]
var input1 = [2, 5, 1, 3, 4]
var input3 = [1, 2, 5, 3, 7, 8, 6, 4]

var result = newYearChaos(input3)
console.log(result)

module.exports = newYearChaos
