function solution(a, b) {
  let sumSecond = a.toString() + b.toString();
  sumSecond = Number(sumSecond);
  let sumFirst = 2 * a * b;

  if (sumFirst < sumSecond) {
      return sumSecond;
  } else {
      return sumFirst;
  }
}