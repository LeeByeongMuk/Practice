# 문제
https://leetcode.com/problems/same-tree/

# 100. Same Tree

## 1차 풀이 답
``` javascript
var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    
    if (p.val === q.val) {
        if (!isSameTree(p.left, q.left)) return false;
        if (!isSameTree(p.right, q.right)) return false;
    } else {
        return false;
    }
    
    return true;
};
```

<br>

## 2차 풀이 답
``` javascript
var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val != q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```
코드량이 줄어들고 가독성이 더 좋아짐