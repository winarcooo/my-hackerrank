// Complete the miniMaxSum function below.
function minMaxSum(arr) {
    var sum = arr.reduce(add)
    function add(accumulator, a) {
        return accumulator + a
    }
    min = sum - Math.max(...arr)
    max = sum - Math.min(...arr)

    return(min + ' ' + max)
}

module.exports = minMaxSum;