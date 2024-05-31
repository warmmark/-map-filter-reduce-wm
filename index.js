function getDivisibleByThree(arrayOfNums) {
  return arrayOfNums.filter((el) => el % 3 === 0);
}
console.log(getDivisibleByThree([1, 3, 5, 6, 7, 9, 11, 12]));

function getEven(arrayOfNums) {
    return arrayOfNums.filter((el) => el % 2 === 0);
}
console.log(getEven([1, 3, 5, 6, 7, 9, 11, 12]));
