function stairCase(n) {
    // print height of stair
    for(i = 1; i <= n; i++) {
        // print space in each line
        for(j = n-i; j > 0; j--){
            process.stdout.write(' ')
        }
        // print star in each line
        for(j = 1; j <= i; j++) {
            process.stdout.write('#')
        }
        process.stdout.write('\n')
    }
}

module.exports = stairCase;