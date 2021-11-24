# 문제
https://leetcode.com/problems/length-of-last-word/

# 58. Length of Last Word

## 1차 풀이 답
``` javascript
var lengthOfLastWord = function(s) {
    const strs = s.trimEnd().split(' ');
    return strs[strs.length - 1].length;
};
```
내장 함수를 사용하여 풀이

## 2차 풀이 답
``` javascript
var lengthOfLastWord = function(s) {
    s = s.trimEnd();
    let result = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') break;
        result++;
    }

    return result;
};
```
반복문을 사용하여 풀이

