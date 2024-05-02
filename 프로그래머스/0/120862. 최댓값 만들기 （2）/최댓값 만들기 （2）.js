function solution(numbers) {
  let numSort = numbers.sort((a, b) => a - b);
  let maxNum = numSort[numSort.length - 1] * numSort[numSort.length - 2];
  let minNum = numSort[0] * numSort[1];

  return Math.max(maxNum, minNum);
}