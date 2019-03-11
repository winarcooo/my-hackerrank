function diagonalDifference(arr) {
    var ld = 0;
    var rd = 0;

    var i = 0
    var n = arr.length
    do {
        ld += arr[i][i]
        rd += arr[i][n - i - 1]
        i++
    }
    while (i < n);

    return Math.abs(ld - rd)
}
