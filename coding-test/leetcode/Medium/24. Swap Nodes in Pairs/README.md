# 문제
https://leetcode.com/problems/swap-nodes-in-pairs/

# 24. Swap Nodes in Pairs

## 1차 풀이 답
``` javascript
var swapPairs = function(head, level = 0) {
    if (head !== null && head.next !== null) {
        if (level % 2 === 0) {
            [head.val, head.next.val] = [head.next.val, head.val];
        }
        swapPairs(head.next, level + 1);
    }
    
    return head;
};
```