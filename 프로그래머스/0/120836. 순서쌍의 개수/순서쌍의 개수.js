function solution(n) {
    let count = 0;
    for (i=1; i*i<= n; i++) {
        if (n % i === 0) {
            count++;
            if (i !== n / i) {
                count++;
            }
        }
    }
    return count;
}