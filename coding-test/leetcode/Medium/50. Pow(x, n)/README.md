# 문제
https://leetcode.com/problems/powx-n/

# 50. Pow(x, n)

## 1차 풀이 답
``` javascript
var myPow = function(x, n) {
    return Math.pow(x, n).toFixed(5);
};
```
Math 내장 메소드를 활용해 풀이

## 2차 풀이 답
``` javascript
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / myPow(x, n * -1);
    return n % 2 === 0 ? myPow(x * x, n / 2) : myPow(x * x, (n - 1) / 2) * x;
};
```
문제의 토픽에 재귀가 있어서 재귀를 활용해 다시 풀이했다.
