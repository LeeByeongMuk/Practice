# 문제
https://leetcode.com/problems/valid-parentheses/

# 20. Valid Parentheses

## 1차 풀이 답
``` javascript
var isValid = function(s) {
    const obj = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    let stack = [];
    
    for (let v of s) {
        const prev = stack[stack.length - 1];
        if (prev && obj[v] === prev) {
            stack.pop();
        } else {
            stack.push(v);
        }
    }
    
    return stack.length === 0;  
};
```
> 시간 복잡도 o(n)

## 2차 풀이 답
``` javascript
var isValid = function(s) {
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    let stack = [];
    
    for (let v of s) {
        const prev = stack[stack.length - 1];
        if (prev && map.get(v) === prev) {
            stack.pop();
        } else {
            stack.push(v);
        }
    }
    
    return stack.length === 0;
};
```
> 시간 복잡도 o(n)

