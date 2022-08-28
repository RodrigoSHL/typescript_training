'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    const format = s.slice(8,9);
    const hour = +s.split(':')[0];
    const remaining = s.slice(2,8);
    if(format == 'P' && hour < 12)
        return (hour+12).toLocaleString() + remaining;
    else if (format == 'A' && hour === 12)
        return '00' + remaining;
    else return s.slice(0,8)
}

export function main() {
    //const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);
    const ws: WriteStream = createWriteStream('');

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
