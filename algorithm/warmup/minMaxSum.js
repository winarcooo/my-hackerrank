// Complete the miniMaxSum function below.
function minMaxSum(arr) {
    var sum = arr.reduce(add)
    function add(accumulator, a) {
        return accumulator + a
    }
    var min = 0;
    var max = 0;
    min = sum - Math.max(...arr)
    max = sum - Math.min(...arr)

    console.log(min + "  " + max)
}

var arr = [1,2,3,4,5]
minMaxSum(arr)