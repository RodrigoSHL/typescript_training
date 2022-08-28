'use strict';

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    arr.sort();
    const sumMin: number= calcule(arr);
    const sumMax: number= calcule(arr.reverse())
    console.log(sumMin,sumMax)
}

function calcule(arr: number[]): number {
    let sum=0;
    for (let i=0; i < 4; i++) {
        sum += arr[i];
    }
    return sum;   
}



export function main() {

    //const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const arr: number[] = [1,2,3,4,5]
    miniMaxSum(arr);
}
