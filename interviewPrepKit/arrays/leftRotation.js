function leftRotation(arr, count) {
    var temp
    for (var i=1; i<=count; i++) {
        temp = arr.shift()
        arr.push(temp)
    }
    return arr
}

var arr = [1,2,3,4,5]
var count = 4
var result = leftRotation(arr, count)
console.log(result)