# 문제
https://leetcode.com/problems/palindrome-number/

# 9. Palindrome Number

## 1차 풀이 답
``` javascript
var isPalindrome = function(x) {
    let result = true;
    let s = x.toString().split('');
    
    while (s.length !== 0) {
        if (s.length === 1) s.pop();
        
        if (s.pop() !== s.shift()) {
            result = false;
            break;
        } 
    }
    
    return result;
};
```
> 시간 복잡도 o(n)

## 2차 풀이 답
``` javascript
var isPalindrome = function(x) {
    const s = x.toString();
    const r = s.split('').reverse().join('');
    return s === r;
};
```

