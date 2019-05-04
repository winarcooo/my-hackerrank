/**
 * bikin string dari huruf 'a' dan 'b'
 * rulesnya huruf gak boleh berulang 3 kali (aaa) (bbb)
 * 
 * misalnya huruf a = 5; b = 3
 * return yang posible "aabababa"
 */

function solution(A, B) {
  const arr = [];
  function canPush(char) {
    const { length } = arr;
    return (arr[length - 1] !== char || arr[length - 2] !== char);
  }
  function push(char) {
    arr.push(char);
    if (char === 'a') A--;
    else if (char === 'b') B--;
  }
  
  while (A > 0 || B > 0) {
    if (A > B) {
      if (canPush('a')) push('a');
      else if (B === 0) return console.log('Impossible');
      else push('b');
    } else if (B >= A) {
      if (canPush('b')) push('b');
      else if (A === 0) return console.log('Impossible');
      else push('a');
    }
  }

  return arr.join('');
}

let result = solution(5,3);
console.log(result);