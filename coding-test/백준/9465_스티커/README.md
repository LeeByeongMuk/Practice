# 문제
https://www.acmicpc.net/problem/9465

# 참고 자료

# 답

```javascript
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const testCases = input.slice(1);

function solution(n, testCases) {
  let result = [];

  for (let i = 0; i < n; i++) {
    const m = testCases[i * 3];
    const row1 = testCases[i * 3 + 1].split(' ').map(Number);
    const row2 = testCases[i * 3 + 2].split(' ').map(Number);
    const dp = [[0, row1[0], row2[0]]];

    for (let j = 1; j < m; j++) {
      dp[j] = [
        Math.max(...dp[j - 1]),
        Math.max(dp[j - 1][0], dp[j - 1][2]) + row1[j],
        Math.max(dp[j - 1][0], dp[j - 1][1]) + row2[j],
      ];
    }

    result.push(Math.max(...dp[m - 1]));
  }

  return result.join('\n');
}

console.log(solution(n, testCases));
```
