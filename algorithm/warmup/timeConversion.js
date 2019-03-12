function timeConversion(time) {
    var time = time.split(":")
    var periode = time[2].slice(2)
    time[2] = time[2].slice(0,2)

    if(periode.toLowerCase() == 'pm') {
        if(time[0] == '12') {
            return time.join(':')
        }
        time[0] = (parseInt(time[0]) + 12).toString()
        return time.join(':')
    } else if(periode.toLowerCase() == 'am') {
        if(time[0] == '12') {
            time[0] = '00'
            return time.join(':')
        }
        return time.join(':')
    }
}

var time = '06:40:03AM'
var result = timeConversion(time)
console.log(result)