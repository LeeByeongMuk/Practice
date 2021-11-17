# 문제
https://leetcode.com/problems/longest-common-prefix/

# 14. Longest Common Prefix

## 1차 풀이 답
``` javascript
var longestCommonPrefix = function(strs) {
    const str = strs[0];
    let result = '';
    
    
    for (let i = str.length - 1; i >= 0; i--) {
        let check = true;
        const target = str.slice(0, i + 1);
        
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].indexOf(target) !== 0) {
                check = false;
                break;
            }
        }
        
        if (check) {
            result = target;
            break;
        }
    }
    
    return result;
};
```
