function appleAndOrange(s, t, a, b, apples, oranges) {
    var appleTree = a
    var orangeTree = b

    var newApplePosition = apples.map((apple) => appleTree + apple)
        .filter(touchTheHouse)
        .length

    var newOrangePosition = oranges.map((orange) => orange + orangeTree)
        .filter(touchTheHouse)
        .length

    function touchTheHouse(position) {
        if (position >= s && position <= t) {
            return position
        }
    }

    return newApplePosition + "\n" + newOrangePosition
}

var s = 7
var t = 10
var a = 4
var b = 12
var apples = [2, 3, -4]
var oranges = [3, -2, -4]
var result = appleAndOrange(s, t, a, b, apples, oranges)
console.log(result)