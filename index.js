function getDivisibleByThree(arrayOfNums) {
  return arrayOfNums.filter((el) => el % 3 === 0);
}
console.log(getDivisibleByThree([1, 3, 5, 6, 7, 9, 11, 12]));

function getEven(arrayOfNums) {
  return arrayOfNums.filter((el) => el % 2 === 0);
}
console.log(getEven([1, 3, 5, 6, 7, 9, 11, 12]));

function firstLetterToUpperCase(arrayOfWords) {
  return arrayOfWords.map((el) => `${el.slice(0, 1).toUpperCase()}${el.slice(1)}`).join(' ');
}
console.log(firstLetterToUpperCase(['В', 'лесу', 'родилась', 'ёлочка']));