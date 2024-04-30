function solution(my_strings, parts){
  result = "";
  for(i=0; i<my_strings.length; i++){
    let sliceStr = my_strings[i].slice(parts[i][0], parts[i][1] + 1)
    result += sliceStr;
  }
  return result;
}