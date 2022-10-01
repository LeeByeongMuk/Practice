# 문제
https://www.acmicpc.net/problem/1106

# 답
```javascript
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [C, N] = input[0].split(' ').map(Number);
const cities = input.slice(1).map((v) => v.split(' ').map(Number));

function solution() {
  const dp = Array.from({length: C + 1}, () => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  
  for (let j = 0; j < N; j++) {
    const [cost, customer] = cities[j];
    if (dp[customer] > cost) dp[customer] = cost;

    for (let i = 1; i <= C; i++) {
      if (i < customer) {
        dp[i] = Math.min(dp[i], cost)
      } else {
        dp[i] = Math.min(dp[i], dp[i - customer] + cost);
      }
    }
  }

  return dp[C];
}

console.log(solution());
```
