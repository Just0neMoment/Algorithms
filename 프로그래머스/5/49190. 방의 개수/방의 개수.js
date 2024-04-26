function solution(arrows) {
    let rooms = 0;
    const visitedPoints = new Map();
    const visitedEdges = new Map();

    const moves = [
        [0, -1], [1, -1], [1, 0], [1, 1],
        [0, 1], [-1, 1], [-1, 0], [-1, -1]
    ];

    let x = 0;
    let y = 0;
    visitedPoints.set(`${x},${y}`, true);

    for (let arrow of arrows) {
        for (let i = 0; i < 2; i++) { // 두 번 이동하여 대각선 교차를 처리합니다.
            const [dx, dy] = moves[arrow];
            const nextX = x + dx;
            const nextY = y + dy;
            const edgeKey1 = `${x},${y}-${nextX},${nextY}`;
            const edgeKey2 = `${nextX},${nextY}-${x},${y}`;

            if (visitedPoints.get(`${nextX},${nextY}`) && !visitedEdges.get(edgeKey1)) {
                rooms++; // 이미 방문한 점이지만 새로운 간선을 통해 도달한 경우 방이 형성됩니다.
            }

            visitedEdges.set(edgeKey1, true);
            visitedEdges.set(edgeKey2, true);

            x = nextX;
            y = nextY;
            visitedPoints.set(`${x},${y}`, true);
        }
    }

    return rooms;
}