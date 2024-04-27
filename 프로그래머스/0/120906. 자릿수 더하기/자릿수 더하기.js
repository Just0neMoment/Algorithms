function solution(n) {
  let result = 0;
  let str = String(n)
  let mapfn = (arg) => Number(arg)
  let newArr = Array.from(str, mapfn)
  for(i=0; i<newArr.length; i++){
    result += newArr[i]
  }
  return result;
}