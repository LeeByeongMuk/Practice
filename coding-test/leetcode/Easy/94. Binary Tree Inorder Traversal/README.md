# 문제
https://leetcode.com/problems/binary-tree-inorder-traversal/

# 94. Binary Tree Inorder Traversal

## 1차 풀이 답
``` javascript
var inorderTraversal = function(root) {
    let result = [];
    
    const dfs = (root) => {
        if (!root) return;
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    }
    
    dfs(root);
    return result;
};
```
