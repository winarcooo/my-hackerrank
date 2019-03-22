function twoDimArray(arr) {
    var sumOfHourglass = []

        // first we loop vertically
        for (var i = 0; i < arr.length-2; i++) {
            // then we loop horizontally
            for (var j = 0; j < arr.length-2; j++) {
                // sum of single hourglass
                sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
                        arr[i+1][j+1] +
                        arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
                // push every hourglass sum to new array
                sumOfHourglass.push(sum)
            }
        }
    
    // return the highest sum
    return Math.max(...sumOfHourglass)
}

var arrays = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
]

var result = twoDimArray(arrays, length)
console.log(result)