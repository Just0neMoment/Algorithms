function solution(arr) {
  let result = [];
  for(i=0; i<arr.length; i++){
    let sum = arr[i]
    for(a=0; a<sum; a++){
      result.push(sum)
    }
  }
  return result;
}