/**
 * kunal suka main poker
 * kalo main kunal punya strategi khusus
 * 1. gambling 1 chip buat ngetes luck
 * 2. abis itu selalu all-in
 * 
 * coba itung berapa langkah terkecil buat kunal biar dapet N chip
 * K adalah berapa kali dia all-in 
 * 
 * misalnya f(N,K) = f(5,1)
 * chip awal 1
 * all-in 1
 * target chip 5
 * putaran ke-1 bet 1 chip menang jadi 2 chipnya
 * putaran ke-2 all-in pasang 2 chip menang jadi 4
 * putaran ke-3 bet 1 chip menang jadi 5 deh
 */

function solution(N, K) {
  var p = 0;

  for (N; N > 1; p++) {
    if (K != 0) {
      if (N % 2 == 0) {
        N = N / 2;
        --K;
      } else {
        --N;
      }
    } else {
      --N;
    }
  }
  return p;
}

var result = solution(18, 2)
console.log(result)