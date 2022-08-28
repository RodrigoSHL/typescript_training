'use strict';


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
    const s: string = '07:05:45PM';

    const result: string = timeConversion(s);
    return console.log(result);
}
