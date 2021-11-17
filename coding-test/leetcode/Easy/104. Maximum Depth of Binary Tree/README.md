# 문제
https://leetcode.com/problems/maximum-depth-of-binary-tree/

# 104. Maximum Depth of Binary Tree

## 1차 풀이 답
``` javascript
var maxDepth = function(root) {
    let depth = 0;
    
    const dfs = (node, level) => {
        if (!node) return;
        if (node.left === null && node.right === null) {
            depth = level > depth ? level : depth;  
        } else {
            if (node.left) dfs(node.left, level + 1); 
            if (node.right) dfs(node.right, level + 1);
        }
    }
    
    dfs(root, 1);
    return depth;
};
```
