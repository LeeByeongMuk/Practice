# 문제
https://www.acmicpc.net/problem/2217

# 답
```javascript
const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function solution(n, arr) {
  arr.sort((a, b) => a - b);
  let max = arr[0] * n;

  for (let i = 1; i < n; i++) {
    const cur = arr[i] * (n - i);
    max = Math.max(max, cur);
  }

  return max;
}

console.log(solution(n, arr));
```
