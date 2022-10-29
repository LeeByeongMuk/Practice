# 문제
https://www.acmicpc.net/problem/14620

# 참고 자료 

# 답
```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const arr = input.slice(1).map(v => v.split(' ').map(Number));

function solution() {
  let answer = Number.MAX_SAFE_INTEGER;
  const visited = Array.from({length: N + 1}, () => Array(N + 1).fill(false));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(x, y, sum, count) {
    if (count === 3) {
      answer = Math.min(answer, sum);
      return;
    }

    for (let i = 1; i < N - 1; i++) {
      for (let j = 1; j < N - 1; j++) {
        if (visited[i][j]) continue;

        let flag = true;
        let cost = 0;

        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];

          if (visited[nx][ny]) {
            flag = false;
            break;
          }

          cost += arr[nx][ny];
        }

        if (!flag) continue;

        visited[i][j] = true;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          visited[nx][ny] = true;
        }

        dfs(i, j, sum + cost + arr[i][j], count + 1);

        visited[i][j] = false;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          visited[nx][ny] = false;
        }
      }
    }
  }

  dfs(1, 1, 0, 0);
  return answer;
}

console.log(solution());
```
