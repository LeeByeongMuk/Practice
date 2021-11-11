# 문제
https://leetcode.com/problems/pascals-triangle-ii/

# 119. Pascal's Triangle II

## 1차 풀이 답
``` javascript
var getRow = function(rowIndex) {
    let arr = [];
    
    for (let i = 0; i <= rowIndex; i++) {
        const prev = [...arr];
        arr = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                arr.push(1);
            } else {
                arr.push(prev[j] + prev[j - 1]);
            }
            
        }
    }
    
    return arr;
};
```

