function aVeryBigSum(ar) {
    var sum = ar.reduce(add);
    function add(accumulator, a) {
        return accumulator + a
    }
    return sum
}

module.exports = aVeryBigSum;

// (function(){
//     var arr = [1000000001,1000000002,1000000003,1000000004,1000000005]
//     console.log(aVeryBigSum(arr))
// })();


