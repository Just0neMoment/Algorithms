function solution(num_list, n) {
    let firstArr = num_list.slice(n);
    let secondArr = num_list.slice(0, n);
    return firstArr.concat(secondArr);
}