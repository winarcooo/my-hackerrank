function aVeryBigSum(ar) {
    var sum = ar.reduce(add);
    function add(accumulator, a) {
        return accumulator + a
    }
    return sum
}

module.exports = aVeryBigSum;

