function solution(num_list) {
  let result = [];
  let lastArr = num_list[num_list.length - 1]
  let lastNextArr = num_list[num_list.length - 2]
  result.push(...num_list);
  if (lastArr > lastNextArr) {
    result.push(lastArr - lastNextArr);
  } else {
    result.push(lastArr * 2);
  }
  return result
}