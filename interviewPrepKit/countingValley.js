function countingValley(arr) {
  let track = arr.split('')

  let sum = 0
  let counter = 0
  
  for (step in track) {
    if (track[step] == "U") {
      sum++
      if (sum == 0) counter++
    }
    if (track[step] == "D") sum--
  }

  return counter

}

const sampleValues = "UDDDUDUU"
let result = countingValley(sampleValues)
console.log(result);


// _/\       _
//    \    /
//     \/\/