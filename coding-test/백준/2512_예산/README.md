# 문제
https://www.acmicpc.net/problem/2512

# 참고 자료

# 답

```javascript
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const budgets = input[1].split(' ').map(Number).sort((a, b) => b - a);
const m = Number(input[2]);

function solution() {
  let answer = 0;
  let left = 0;
  let right = budgets[0];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let possible = 0;
    for (let b of budgets) {
      if (b > mid) possible += mid;
      else possible += b;
    }

    if (m >= possible) {
      if (mid > answer) answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(solution());
```
