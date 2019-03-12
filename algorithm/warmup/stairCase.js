function stairCase(n) {

    var m = n-1
    for(i = 0; i <= n; i++) {

        while(m > 0) {
            process.stdout.write('#')
            m--
        }

        for(j = 0; j <= i; j++) {
            process.stdout.write('*')
        }
        process.stdout.write('\n')
    }
}

n = 4
var result = stairCase(n)
console.log(result)