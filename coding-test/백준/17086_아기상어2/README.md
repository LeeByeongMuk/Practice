# 문제

https://www.acmicpc.net/problem/17086

# 참고 자료

# 답

```javascript
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(i => i.split(' ').map(Number));
const DIRECTION = [
  [0, -1],
  [0, 1],
  [1, 0],
  [1, 1],
  [1, -1],
  [-1, 0],
  [-1, -1],
  [-1, 1],
];

console.log(solution(n, m, arr));

function solution(n, m, arr) {
  const visit = Array.from({length: n}, () => Array.from({length: m}, () => false));
  const queue = [];
  arr.forEach((item1, index1) => {
    item1.forEach((item2, index2) => {
      if (item2 === 1) queue.push([index1, index2]);
    })
  });

  return getMax(bfs(queue, visit, arr));
}


function bfs(queue, visit, arr) {
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < DIRECTION.length; i++) {
      const nx = x + DIRECTION[i][0];
      const ny = y + DIRECTION[i][1];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visit[nx][ny]) {
        visit[nx][ny] = true;
        if (arr[nx][ny] === 0) {
          arr[nx][ny] = arr[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return arr;
}

function getMax(arr) {
  let result = 0;
  arr.forEach(item1 => {
    item1.forEach(item2 => {
      result = Math.max(result, item2);
    })
  });
  return result - 1;
}
```
