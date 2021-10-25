# 문제
https://leetcode.com/problems/symmetric-tree/

# 101. Symmetric Tree

## 1차 풀이 답
``` javascript
var isSymmetric = function(root) {
    if (!root) return true;

    
    
    const bfs = (r1, r2) => {
        if (!r1 && !r2) return true;
        if (!r1 || !r2) return false;
        return r1.val === r2.val && bfs(r1.left, r2.right) && bfs(r1.right, r2.left)
    }
    
    return bfs(root.left, root.right);
};
```

