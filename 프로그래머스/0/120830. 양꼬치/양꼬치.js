function solution(n, k) {
  let sheep = n * 12000
  let drink = k * 2000
  if(n >= 10){
      drink -= (Math.floor(n/10) * 2000)
  }
  return sheep + drink
}