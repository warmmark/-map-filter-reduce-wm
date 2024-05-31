function isDivisibleByThree(arrayOfNums) {
  return arrayOfNums.filter((el) => el % 3 === 0);
}
console.log(isDivisibleByThree([1, 3, 5, 6, 7, 9, 11, 12]));
