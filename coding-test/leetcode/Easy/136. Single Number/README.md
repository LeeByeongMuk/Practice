# 문제
https://leetcode.com/problems/single-number/

# 136. Single Number

## 1차 풀이 답
``` javascript
var singleNumber = function(nums) {
    let set = new Set();
    
    for (let n of nums) {
        if (set.has(n)) {
            set.delete(n);
        } else {
            set.add(n);
        }
        
    }
    
    return Array.from(set)[0];
};
```
> 시간 복잡도 o(n)

