function solution(box, n) {
    const boxInDiceWidth = Math.floor(box[0] / n);
    const boxInDiceDepth = Math.floor(box[1] / n);
    const boxInDiceHeight = Math.floor(box[2] / n);

    return boxInDiceWidth * boxInDiceDepth * boxInDiceHeight;
}