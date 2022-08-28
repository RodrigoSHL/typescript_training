"use strict";
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
  const positives: number[] = [];
  const zeros: number[] = [];
  const negatives: number[] = [];

  arr.forEach((currentNumber) => {
    if (currentNumber > 0) {
      positives.push(currentNumber);
    } else if (currentNumber < 0) {
      negatives.push(currentNumber);
    } else if (currentNumber == 0) {
      zeros.push(currentNumber);
    }
  });

  console.log(positives.length / arr.length);
  console.log(negatives.length / arr.length);
  console.log(zeros.length / arr.length);
}

export function main() {
  // const n: number = parseInt(readLine().trim(), 10);

  // const arr: number[] = readLine()
  //   .replace(/\s+$/g, "")
  //   .split(" ")
  //   .map((arrTemp) => parseInt(arrTemp, 10));
  const arr = [-1,0,1,1,-1]

  plusMinus(arr);
}
