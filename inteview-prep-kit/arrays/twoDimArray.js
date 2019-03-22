function twoDimArray(arr) {
    var sumOfHourglass = []

        // first we loop vertically
        for (var i = 0; i < arr.length-2; i++) {
            // then we loop horizontally
            for (var j = 0; j < arr.length-2; j++) {
                sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
                        arr[i+1][j+1] +
                        arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
                
                sumOfHourglass.push(sum)
            }
        }
    

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