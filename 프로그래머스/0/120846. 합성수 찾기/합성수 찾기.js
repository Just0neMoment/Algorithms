function solution(n) {
    let compositeCount = 0;
    for (i = 2; i <= n; i++) {
        let divisorCount = 0;
        for (j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisorCount++;
            }
        }
        if (divisorCount > 2) {
            compositeCount++;
        }
    }
    return compositeCount;
}