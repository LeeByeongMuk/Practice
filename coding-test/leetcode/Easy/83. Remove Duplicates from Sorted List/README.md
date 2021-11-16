# 문제
https://leetcode.com/problems/remove-duplicates-from-sorted-list/

# 83. Remove Duplicates from Sorted List

## 1차 풀이 답
``` javascript
var deleteDuplicates = function(head) {
    if (!head) return head;

    let result = new ListNode(head.val);
    let current = result;
    
    while (head) {
        if (head.val > current.val) {
            current.next = new ListNode(head.val);
            current = current.next;
        }
        head = head.next;
    }
    
    return result;
};
```

## 2차 풀이 답
``` javascript
var deleteDuplicates = function(head) {
    let node = head;

    while (node && node.next) {
        if (node.val === node.next.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    
    return head;
};
```
시간복잡도 면에서는 차이가 없고 코드가 간결해진 풀이

