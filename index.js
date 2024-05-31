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
console.log(countInversions([1, 2, 3, 4, 5, 6, 7]));

function areAnyTheSameHeight(firstArray, secondArray) {
  const countOfTheSame = firstArray
  .reduce((acc, element) => secondArray.includes(element) ? acc += 1 : acc, 0);
  if (countOfTheSame === 0) return 'Нет, во второй команде нет игроков с ростом игроков первой команды.';
  return `Да, во второй команде есть игроки с ростом игроков первой команды. Таких игроков ${countOfTheSame}`;
}
console.log(areAnyTheSameHeight([172, 181, 192, 167], [157, 197, 181]));
console.log(areAnyTheSameHeight([172, 181, 192, 167], [157, 197, 182]));

function areAnyPairOfTheSameNums(array) {
  return array.reduce((acc, element) => acc.add(element), new Set()).size !== array.length;
}
console.log(areAnyPairOfTheSameNums([7, 12, 40, 21, 57, 32, 21, 5, 7, 21]));
console.log(areAnyPairOfTheSameNums([7, 12, 40, 21, 57, 32]));
console.log(areAnyPairOfTheSameNums([21]));

function findAverageMinMaxMarks(arrOfObj) {
  const averageMark = arrOfObj
  .reduce((acc, element) => acc += element.mark, 0) / arrOfObj.length;
  const minMark = arrOfObj
  .reduce((acc, element) => acc < element.mark ? acc : acc = element.mark, arrOfObj[0].mark);
  const maxMark = arrOfObj
  .reduce((acc, element) => acc > element.mark ? acc : acc = element.mark, arrOfObj[0].mark);
  return `average mark: ${averageMark}, min mark: ${minMark}, max mark: ${maxMark}`;
}
console.log(findAverageMinMaxMarks([
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
  { name: 'Mike', class: 'B', mark: 5 },
  { name: 'Alex', class: 'C', mark: 2 },
]));

function workWithArrayOfObjectsOfMarks(arrOfObj, key) {
  return arrOfObj.reduce((acc, element) => acc[element[key]] ? ({...acc, [element[key]]: [...acc[element[key]], element]}) : ({...acc, [element[key]]: [element]}), new Object());
}
console.log(workWithArrayOfObjectsOfMarks([
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
  { name: 'Mike', class: 'B', mark: 5 },
  { name: 'Alex', class: 'C', mark: 2 },
], 'mark'));

function findNumberOfUsingDomains(array) {
  const normalArr = array.map((element) => element.trim());
  const result = normalArr
  .reduce((acc, element) => {
    if (element.includes('http://')) {
      Object.hasOwn(acc, 'http') ? acc['http'] += 1 : acc['http'] = 1;
    } else if (element.includes('https://')) {
      Object.hasOwn(acc, 'https') ? acc['https'] += 1 : acc['https'] = 1;
    } else {
      Object.hasOwn(acc, 'http') ? acc['http'] += 1 : acc['http'] = 1;
    }
    return acc;
  }, new Object());
  return result;
}
console.log(findNumberOfUsingDomains([
  'http://google.com',
  'https://hexlet.io',
  ' yandex.ru',
  'dzen.ru',
  'https://ya.ru',
  'https://github.com',
  'http://mail.ru',
]))
