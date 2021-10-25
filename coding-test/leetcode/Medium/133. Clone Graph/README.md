# 문제
https://leetcode.com/problems/clone-graph/

# 133. Clone Graph

## 1차 풀이 답
``` javascript
var cloneGraph = function(node) {
    const dfs = (node, copy) => {
        if (!node) return;
        if (!copy.has(node.val)) {
            copy.set(node.val, new Node(node.val));
            copy.get(node.val).neighbors = node.neighbors.map(n => dfs(n, copy)); 
        }
        return copy.get(node.val);
    }
    return dfs(node, new Map());
};
```
