# 문제
https://leetcode.com/problems/implement-strstr/

# 28. Implement strStr()

## 1차 풀이 답
``` javascript
var strStr = function(haystack, needle) {
    if (!haystack && !needle) return 0;
    const check = haystack.match(needle);
    return !check ? -1 : check.index;
};
```

## 1차 풀이 답
``` javascript
var strStr = function(haystack, needle) {
    if (!haystack && !needle) return 0;
    return haystack.indexOf(needle);
};
```
문제의 의도는 indexOf 메소드를 사용하는게 맞는거 같다
