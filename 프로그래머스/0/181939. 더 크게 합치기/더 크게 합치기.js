function solution(a, b) {
    const concatAB = parseInt(`${a}${b}`);
    const concatBA = parseInt(`${b}${a}`);
    return Math.max(concatAB, concatBA);
}
