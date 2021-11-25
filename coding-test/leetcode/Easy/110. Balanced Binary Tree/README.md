# 문제
https://leetcode.com/problems/balanced-binary-tree/

# 110. Balanced Binary Tree

## 1차 풀이 답
``` javascript
var isBalanced = function(root) {
    if (root === null) return true;
    let result = true;
    
    const getDepth = (node) => {
        if (node === null) return 0;
        const left = getDepth(node.left);
        const right = getDepth(node.right);
        
        if (Math.abs(left - right) > 1) {
            result = false;
        }
        
        return Math.max(left, right) + 1;
    }
    
    getDepth(root);
    return result;
};
```
