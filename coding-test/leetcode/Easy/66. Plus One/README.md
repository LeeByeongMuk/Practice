# 문제
https://leetcode.com/problems/plus-one/

# 66. Plus One

## 1차 풀이 답
``` javascript
var plusOne = function(digits) {
    let cur = digits.length - 1;
    digits[digits.length - 1] += 1;
    
    while (digits[cur] === 10 && cur >= 0) {
        digits[cur--] = 0;

        if (cur >= 0) {
            digits[cur] += 1;
        } else {
            digits.unshift(1);
        }
    }
    
    return digits;
};
```
