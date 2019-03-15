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

module.exports = appleAndOrange;