function sockMerchant(arr) {
  let found;
  let sortedSock = []

  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  const uniqueValues = arr.filter(unique);

  for (let i = 0; i < uniqueValues.length; i++) {
    found = arr.filter((value) => {
      return value == uniqueValues[i]
    });
    sortedSock.push(found)
  }

  let result = sortedSock.map(arr => Math.floor(arr.length / 2))
                    .reduce((total,num) => {
                      return total + num
                    });

  return result
}



const sampleValues = [10,20,20,10,10,30,50,10,20];
let result = sockMerchant(sampleValues)
console.log(result);