function solution(order) {
    const strOrder = String(order);
    let result = 0;
    for (i = 0; i < strOrder.length; i++) {
        if (strOrder[i] === '3' || strOrder[i] === '6' || strOrder[i] === '9') {
            result++;
        }
    }
    return result;
}