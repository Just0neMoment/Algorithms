function solution(my_string, s, e) {
    let arr = my_string.split("");
    for (i=s, j=e; i<j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.join("");
}