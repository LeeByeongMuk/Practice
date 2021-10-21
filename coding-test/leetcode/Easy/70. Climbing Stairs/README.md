# 문제
https://leetcode.com/problems/climbing-stairs/

# 70. Climbing Stairs

## 1차 풀이 답
``` javascript
var climbStairs = function(n) {
    if (n === 0 || n === 1) return n;
    let dp = Array.from({length: n}, () => 0);
    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    
    return dp[n];
};
```
> 시간 복잡도 o(n)
