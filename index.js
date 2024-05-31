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

function changeFirstAndLastLetterOnEachOther(string) {
  let result = string.split(' ')
  .map((el) => el.length === 1 ? el : `${el[el.length - 1]}${el.slice(1, el.length - 1)}${el[0]}`)
  .join(' ');
  return result;
}
console.log(changeFirstAndLastLetterOnEachOther("В лесу родилась ёлочка"));

function findPositiveNumsAndSumOfNegative(arrayOfNums) {
  const positiveNums = arrayOfNums.filter((el) => el > 0);
  const sumOfNegativeNums = arrayOfNums
  .filter((el) => el < 0)
  .reduce((acc, element) => acc += element, 0);
  return `positive nums: ${positiveNums}.
how many positives: ${positiveNums.length}.
sum of negatives: ${sumOfNegativeNums}`;
}
console.log(findPositiveNumsAndSumOfNegative([-7, 5, 9, 0, 2, 6, 19, -21]));

function countInversions(arrayOfNums) {
  return arrayOfNums.reduce((acc, currentValue) => {
    const lastIterationValue = acc.lastElement;
    if (lastIterationValue === undefined) return {lastElement: currentValue, count: 0};
    const lastCounter = acc.count;
    let shouldWeAddPlusOne = 0;
    if (acc.lastElement > currentValue) shouldWeAddPlusOne = 1;
    return {lastElement: currentValue, count: lastCounter + shouldWeAddPlusOne};
  }, {lastElement: undefined, count: 0}).count;
}
console.log(countInversions([24, 35, 29, 44, 8, 22, 4]));
