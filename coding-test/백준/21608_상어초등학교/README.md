# 문제
https://www.acmicpc.net/problem/21608

# 참고 자료

# 답

```javascript
const data = '3\n' +
  '4 2 5 1 7\n' +
  '3 1 9 4 5\n' +
  '9 8 1 2 3\n' +
  '8 1 9 3 4\n' +
  '7 2 3 4 8\n' +
  '1 9 2 5 7\n' +
  '6 5 2 3 4\n' +
  '5 1 9 2 8\n' +
  '2 9 3 1 4';

const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(inputs[0]);
const arr = inputs.slice(1).map(i => i.split(' ').map(Number));
const DIRECTION = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

function setPosition(priorities, board, N) {
  const position = {};
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] !== 0) continue;
      const score = [0, 0]; //
      for (let k = 0; k < 4; k++) {
        const [dx, dy] = DIRECTION[k];
        const [x, y] = [i + dx, j + dy];
        if (x < 0 || y < 0 || x >= N || y >= N) continue;

        if (priorities.includes(board[x][y])) {
          score[0]++;
        } else if (board[x][y] === 0) {
          score[1]++;
        }
      }
      const key = JSON.stringify(score);
      if (!position[key]) position[key] = [[i, j]];
      else position[key].push([i, j]);
    }
  }
  const sortedResult = Object.keys(position).sort((a, b) => {
    const [a0, a1] = JSON.parse(a);
    const [b0, b1] = JSON.parse(b);
    if (a0 !== b0) return b0 - a0;
    return b1 - a1;
  });
  const [x, y] = position[sortedResult[0]][0];
  board[x][y] = priorities[0];
}

function getScore(priorities, board, n) {
  let total = 0;
  const SCORE = [0, 1, 10, 100, 1000];
  priorities.forEach(([student, ...priorities]) => {
    let adjScore = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== student) continue;
        for (let k = 0; k < 4; k++) {
          const [dx, dy] = DIRECTION[k];
          const [x, y] = [i + dx, j + dy];
          if (x < 0 || x >= n || y < 0 || y >= n) continue;
          if (priorities.includes(board[x][y])) adjScore++;
        }
      }
    }
    total += SCORE[adjScore];
  });
  return total;
}

function solution(n, arr) {
  const res = Array.from({length: n}, () => Array.from({length: n}, () => 0));

  arr.forEach((item) => {
    setPosition(item, res, n);
  });

  return getScore(arr, res, n);
}

console.log(solution(n, arr));
```
