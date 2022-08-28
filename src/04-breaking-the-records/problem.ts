"use strict";

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
  let min: number = scores[0];
  let max: number = scores[0];
  let countMin: number = 0;
  let countMax: number = 0;
  scores.forEach(season => {
    if(season > max) {
      max = season;
      countMax++
    }
    if(season < min) {
      min = season;
      countMin++
    }
  })

  return [countMax,countMin];
}

export function main() {
  //expected [2,4]
  const scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];

  const result: number[] = breakingRecords(scores);
  console.log('result', result)
}
