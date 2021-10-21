# 문제
https://leetcode.com/problems/path-sum/

# 112. Path Sum

## 1차 풀이 답
``` javascript
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let result = false;
    let sum = 0

    const dfs = (root, isLeaf) => {
        if (!root) {
            console.log(isLeaf, sum);
            if (isLeaf && sum === targetSum) result = true;
            return;
        } else {
            if (!result) {
                const isleafNode = root.left || root.right ? false : true;
                sum += root.val;
                dfs(root.left, isleafNode);
                dfs(root.right, isleafNode);
                sum -= root.val;
            }
        }
    }
    
    dfs(root);
    return result;
};
```

<br>

## 2차 풀이 답
``` javascript
var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    const dfs = (root, sum) => {
        if (!root) return false;
        sum += root.val;
        if (!root.left && !root.right) return sum === targetSum;
        return dfs(root.left, sum) || dfs(root.right, sum);   
    }
    
    return dfs(root, 0);
};
```
1차 풀이 때의 비해 성능이 좋고 코드 줄수와 가독성이 좋아짐