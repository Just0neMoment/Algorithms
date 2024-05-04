function solution(n) {
    let pieces = 6;
    let count = 1;
    while (pieces % n !== 0) {
        count += 1;
        pieces += 6;
    }
    return count;
}