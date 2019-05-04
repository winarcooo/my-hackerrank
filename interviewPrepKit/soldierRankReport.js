/**
 * ada kumpulan tentara
 * tentara ini mesti report ke atasannya
 * atasannya ini ranknya satu tingkat diatasnya (N+1)
 * 
 * kumpulan tentara di representasikan pakai array
 * coba cari ada berapa tentara yang mesti report ke atasannya
 * contoh : 
 * 
 * soldier = [3, 4, 3, 0, 2, 2, 3, 0, 0]
 * 
 * - ada 3 tentara bintang tiga yang mesti report ke tentara bintang empat
 * (soldier[0], soldier[2], soldier[6]) ke (soldier[1])
 * 
 * - ada 2 tentara bintang dua yang mesti report ke tentara bintang tiga
 * (soldier[4], soldier[5]) ke (soldier[0]/soldier[2]/soldier[6])
 * * kalo atasannya ada banyak, bebas mau report kemana aja, kan yang diitung berapa bawahan yang mesti report
 * 
 * jadi total = 3 + 2 = 5
 */

function solution(ranks) {
  let result = []
  let found

  for (var i = 0; i < ranks.length; i++) {
    found = ranks.find(function(rank) {
      return rank == ranks[i] + 1
    })
    if (found) result.push(found);
  }

  return result.length;
}

input = [3, 4, 3, 0, 2, 2, 3, 0, 0];

result = solution(input);
console.log(result);