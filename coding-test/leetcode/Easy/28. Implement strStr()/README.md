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

