"use strict";

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  if ((x2 > x1 && v2 > v1) || (x1 > x2 && v1 > v2)) return "NO";
  else {
    let kangaroo1Advance: number = x1 + v1;
    let kangaroo2Advance: number = x2 + v2;
    while (kangaroo2Advance != kangaroo1Advance) {
      kangaroo1Advance = kangaroo1Advance + v1;
      kangaroo2Advance = kangaroo2Advance + v2;
      console.log(kangaroo1Advance);
      console.log(kangaroo2Advance);
    }
    return "YES";
  }
}

export function main() {
  const x1: number = 0;
  
  const v1: number = 3;

  const x2: number = 4;

  const v2: number = 2;

  const result: string = kangaroo(x1, v1, x2, v2);

  console.log("result", result);
}
