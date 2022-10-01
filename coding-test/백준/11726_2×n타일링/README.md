# 문제
https://www.acmicpc.net/problem/11726

# 참고 자료 

# 답
```javascript
const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

function solution() {
    const dp = Array(N).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= N; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
    }

    return dp[N];
}

console.log(solution());
```
