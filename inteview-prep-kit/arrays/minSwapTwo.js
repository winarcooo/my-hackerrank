// this approach is working
// but lack of efficiency in masive data due to timeout

function minSwapTwo(arr) {
    var counter = 0
    var length = arr.length
    var tail = arr.length - 1
    var smallestNum, temp

    for (var head = 0; head < tail; head++) {
        smallestNum = Math.min(...arr.slice(head, length))

        if (arr[head] != smallestNum) {
            temp = arr[head]
            arr[arr.indexOf(smallestNum)] = temp
            arr[head] = smallestNum

            counter++
        }
    }
    return counter
}

var array = [7,1,3,2,4,5,6]
var array1 = [4,3,1,2]
var array2 = [1,3,5,2,4,6,7] 
var results = minSwapTwo(array2)
console.log(results)

