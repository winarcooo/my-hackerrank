function euler1(n) {
    var arr = []
    for(var i=1;i<n;i++) arr[i] = i

    var result = arr.filter((number) => number % 3 == 0 || number % 5 == 0)
                    .reduce((a,b) => a + b, 0)
    return result
}

var input = 200
var result = euler1(input)
console.log(result)