function solution(my_string) {
  let split = my_string.split("");
  let reverse = split.reverse();
  let join = reverse.join("");

  return join;
}