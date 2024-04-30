function solution(n) {
  let result = 0;
  if (n % 2 === 0) {
    for (let i = 2; i <= n; i++) {
      if (i % 2 === 0) {
        result += i ** 2;
      }
    }
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        result += i;
      }
    }
  }
  return result;
}