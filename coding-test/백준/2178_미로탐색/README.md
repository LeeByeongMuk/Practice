# 문제
https://www.acmicpc.net/problem/2178

# 참고 자료

# 답

```javascript
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(item => item.split('').map(Number));

function solution(n, m, arr) {
  const visit = Array.from({length: n}, () => Array.from({length: m}, () => 0));
  const DIRECTION = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const bfs = (x, y) => {
    const queue = [];
    queue.push([x, y]);
    visit[x][y] = 1;

    while (queue.length) {
      const [cx, cy] = queue.shift();
      for (let i = 0; i < DIRECTION.length; i++) {
        const [nx, ny] = [cx + DIRECTION[i][0], cy + DIRECTION[i][1]];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] && !visit[nx][ny]) {
          visit[nx][ny] = visit[cx][cy] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  bfs(0, 0);
  return visit[n - 1][m - 1];
}

console.log(solution(n, m, arr));
```
