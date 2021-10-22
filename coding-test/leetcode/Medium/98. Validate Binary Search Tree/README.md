# 문제
https://leetcode.com/problems/validate-binary-search-tree/

# 198. Validate Binary Search Tree

## 1차 풀이 답
``` javascript
var isValidBST = function(root, min = Number.NEGATIVE_INFINITY, max = Number.MAX_SAFE_INTEGER) {
    if (!root) return true;
    if (min >= root.val || max <= root.val) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
```
