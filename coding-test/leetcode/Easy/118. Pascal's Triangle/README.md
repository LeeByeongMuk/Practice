# 문제
https://leetcode.com/problems/pascals-triangle/

# 118. Pascal's Triangle

## 1차 풀이 답
``` javascript
var generate = function(numRows) {
    let arr = Array.from({length: numRows}, () => []);
    
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                arr[i][j] = 1;
                continue;
            }
            
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
        }
    }
    
    return arr;
};
```
동적 프로그래밍(DP)을 활용해 진행하였다