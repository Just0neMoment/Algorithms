function solution(num_list) {
  let plus = 0;
  let multiply = 1;
  for(i=0; i<num_list.length; i++){
    plus += num_list[i]
    multiply *= num_list[i]
  }
  let square = plus ** 2;
  if(multiply < square){
    return 1
  } 
  if(multiply > square){
    return 0
  }
}