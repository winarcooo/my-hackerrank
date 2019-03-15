const diceDictionary = {
    12:1, 13:1, 14:1, 15:1,
    21:1, 23:1, 24:1, 26:1,
    31:1, 32:1, 35:1, 36:1,
    41:1, 42:1, 45:1, 46:1,
    51:1, 53:1, 54:1, 56:1,
    62:1, 63:1, 64:1, 65:1,
    16:2, 25:2, 34:2, 61:2,
    52:2, 43:2, 11:0, 22:0,
    33:0 ,44:0 ,55:0 ,66:0
}

function findSameNumber(dices) {
    var uniq = dices
        .map((dice) => { return { count: 1, dice: dice }})
        .reduce((a, b) => {
            a[b.dice] = (a[b.dice] || 0) + b.count
            return a
        },{})
    var duplicate = Object.keys(uniq)
        .filter((a) => uniq[a] > 1)

    return duplicate
}

function countStep(from, to) {
    return diceDictionary[from + '' + to]
}

function sameSideDice(dices) {
    var counter = 0;
    // ada angka yg sama apa enggak ?
    var duplicate = findSameNumber(dices)

    if (duplicate != 0) {
        // ini kondisi kalo ada angka dadu yg sama, cukup ganti dadu yg paling beda
        for (var i = 0; i < dices.length; i++) {
            counter += countStep(dices[i], duplicate)
        }
    } else {
        //nah kalo gak ada yg sama, cek satu-satu

    }

    return counter
}

var diceSide = [2,4,4,2]
var result = sameSideDice(diceSide)
console.log(result)