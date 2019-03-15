function birthdayCake(ar) {
    // find maximum number
    var max = Math.max(...ar)
    
    // search each number in array that same number as max and save to new variable
    var result = ar.filter(number => number == max)

    // return how much inside result array after searching
    return result.length
}

module.exports = birthdayCake;