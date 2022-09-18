# 문제
https://www.acmicpc.net/problem/11123

# 참고 자료

# 답

```javascript
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const DIRECTION = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

const pos = [];
const testCases = [];
const visit = [];
let cur = -1;
input.slice(1).forEach(item => {
  if (item.match(' ')) {
    const [row, col] = item.split(' ').map(Number);
    pos.push([row, col]);
    visit.push(Array.from({length: row}, () => Array.from({length: col}, () => false)));
    cur++;
    testCases.push([]);
  } else {
    testCases[cur].push(item.split(''));
  }
});


const dfs = (x, y, idx) => {
  const [n, m] = pos[idx];
  const item = testCases[idx];
  visit[idx][x][y] = true;

  for (let k = 0; k < DIRECTION.length; k++) {
    const nx = DIRECTION[k][0] + x;
    const ny = DIRECTION[k][1] + y;
    if (nx >= 0 && nx < n && ny >= 0 && ny < m && item[nx][ny] === '#' && !visit[idx][nx][ny]) {
      dfs(nx, ny, idx);
    }
  }
}

function solution() {
  let result = [];

  testCases.forEach((item, idx) => {
    const [n, m] = pos[idx];
    result.push(0);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (item[i][j] === '#' && !visit[idx][i][j]) {
          result[idx] += 1;
          dfs(i, j, idx);
        }
      }
    }
  });


  return result.join('\n');
}

console.log(solution());
```
