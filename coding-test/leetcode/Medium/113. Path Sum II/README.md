# 문제
https://leetcode.com/problems/path-sum-ii/

# 113. Path Sum II

## 1차 풀이 답
``` javascript
var pathSum = function(root, targetSum) {
    let result = [];
    
    const dfs = (root, sum, arr) => {
        if (!root.left && !root.right) {
            if (sum + root.val === targetSum) {
                arr.push(root.val);
                result.push([...arr]);
                arr.pop();
            }
        } else {
            sum += root.val;
            arr.push(root.val);
            if (root.left) dfs(root.left, sum, arr);
            if (root.right) dfs(root.right, sum, arr);
            sum -= root.val;
            arr.pop();
        }
    }
    
    if (root) dfs(root, 0, []);
    return result;
};
```
