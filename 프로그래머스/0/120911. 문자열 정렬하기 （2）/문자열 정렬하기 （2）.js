function solution(my_string) {
    const lowerStr = my_string.toLowerCase().split("");
    let strSort = lowerStr.sort((a, b) => a.localeCompare(b)).join("");
    return strSort
}