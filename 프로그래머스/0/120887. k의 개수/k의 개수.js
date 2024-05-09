function solution(i, j, k) {
    let result = 0;
    const target = k.toString();
    for (num=i; num<=j; num++) {
        const numStr = num.toString();
        for (pos=0; pos<numStr.length; pos++) {
            if (numStr[pos] === target) {
                result++;
            }
        }
    }
    return result;
}
