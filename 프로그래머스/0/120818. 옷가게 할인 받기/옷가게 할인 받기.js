function solution(price) {
  if(price >= 500000){
    return Math.floor(price - (price * 0.20));
  }
  if(price >= 300000) {
    return Math.floor(price - (price * 0.10));
  }
  if(price >= 100000) {
    return Math.floor(price - (price * 0.05));
  }
  return Math.floor(price)
}