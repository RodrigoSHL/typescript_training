"use strict";

export function main() {
  // const str: string = "S;M;plasticCup()"; //plastic cup
  // const str: string = "C;V;mobile phone"; //mobilePhone
  // const str: string = "C;C;coffee machine"; //CoffeeMachine
  //   const str: string = "S;C;LargeSoftwareBook"; //large software book
    const str: string = "C;M;white sheet of paper pad"; //WhiteSheetOfPaperPad()
//   const str: string = "S;V;pictureFrame"; //picture frame
  console.log(parse(str));
}

function parse(str: string) {
  const isSC: string = str.split(";")[0];
  if (isSC === "S") return transformSplit(str);
  else return transformCombine(str);
}
function transformSplit(str: string) {
  const isMCV: string = str.split(";")[1];
  if (isMCV === "M") {
    return transformSplitMethod(str);
  } else if (isMCV === "C") {
    return transformSplitClass(str);
  } else return transformSplitVariable(str);
}
function transformCombine(str: string) {
  const isMCV: string = str.split(";")[1];
  const words: string = str.split(";")[2];
  if (isMCV === "M") {
    return transformCombineMethod(words);
  } else if (isMCV === "C") {
    return transformCombineClass(words);
  } else return transformCombineVariable(words);
}
function transformSplitMethod(str: string) {
  const words: string = str.split(";")[2];
  const w: string = words.split("()")[0];
  const newWords: string = splitAndLowerCase(w);
  return newWords;
}
function transformSplitClass(str: string) {
  const words: string = str.split(";")[2];
  const newWords: string = splitAndLowerCase(words);
  return newWords;
}
function transformSplitVariable(str: string) {
  const words: string = str.split(";")[2];
  const newWords: string = splitAndLowerCase(words);
  return newWords;
}
function splitAndLowerCase(words: string) {
  const newWords: string = words
    .split(/(?=[A-Z])/)
    .join(" ")
    .toLocaleLowerCase();
  return newWords;
}
function transformCombineMethod(words: string) {
  const arrWord: string[] = words.split(" ");
  const newArrWord = arrWord.map((i) => capitalizeFirstLetter(i));
  const newWord = camelize(newArrWord.join(""))
  return newWord + "()";
}
function transformCombineClass(words: string) {
  const arrWord: string[] = words.split(" ");
  const newArrWord = arrWord.map((i) => capitalizeFirstLetter(i));
  const newWord = newArrWord.join("");
  return newWord;
}
function transformCombineVariable(words: string) {
  const newWord: string = camelize(words);
  return newWord;
}
function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
