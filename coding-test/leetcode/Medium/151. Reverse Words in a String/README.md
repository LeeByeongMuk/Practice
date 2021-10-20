# 문제
https://leetcode.com/problems/reverse-words-in-a-string/

# 151. Reverse Words in a String

## 1차 풀이 답
``` javascript
var reverseWords = function(s) {
    return s.trim()
        .replace(/ +/g, ' ')
        .split(' ')
        .reverse()
        .join(' ');
};
```
