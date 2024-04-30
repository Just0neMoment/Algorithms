function solution(my_strings, index_list){
  result = "";
  for(i=0; i<index_list.length; i++){
    result += my_strings.charAt(index_list[i])
  }
  return result
}