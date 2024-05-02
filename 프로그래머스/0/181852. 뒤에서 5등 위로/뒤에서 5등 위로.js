function solution(num_list) {
    let numSort = num_list.sort((a,b) => a-b)
    return numSort.slice(5)
}