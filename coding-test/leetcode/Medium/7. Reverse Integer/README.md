# 문제
https://leetcode.com/problems/reverse-integer/

# 7. Reverse Integer

## 1차 풀이 답
``` javascript
var reverse = function(x) {
    const check = x >= 0 ? 1 : -1;
    const reverseNum = +(Math.abs(x).toString().split('').reverse().join('')) * check;
    const max = 2 ** 31;
    const min = -max;
    
    if (reverseNum > max || min > reverseNum) return 0;
    return reverseNum;
};
```