# 문제
https://leetcode.com/problems/merge-two-sorted-lists/

21. Merge Two Sorted Lists

## 1차 풀이 답
```
function ListNode(val = null, next = null) {
    this.val = val;
    this.next = next;
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    addLast(val) {
        let current = this.head;
        const node = new ListNode(val);
        
        if (!this.head) {
            this.head = node;
        } else {
            while (current.next) {
                current = current.next;
            }
            
            current.next = node;
        }
    }
    
    getData() {
        return this.head;
    }
}

var mergeTwoLists = function(l1, l2) {
    let list = new LinkedList();

    while (l1 && l2) {
        if (l1.val < l2.val) {
            list.addLast(l1.val);
            l1 = l1.next;
        } else {
            list.addLast(l2.val);
            l2 = l2.next;
        }
    }
    
    while (l1) {
        list.addLast(l1.val);
        l1 = l1.next;
    }
    
    while (l2) {
        list.addLast(l2.val);
        l2 = l2.next;
    }
    
    return list.getData();
};
```
1차 풀이는 Linked List 직접 구현하여 작성

## 2차 풀이 답
```
var mergeTwoLists = function(l1, l2) {
    let list;
    
    if (!l1) return l2;
    if (!l2) return l1;
    
    if (l1.val < l2.val) {
        list = l1;
        list.next = mergeTwoLists(l1.next, l2);
    } else {
        list = l2;
        list.next = mergeTwoLists(l1, l2.next);
    }
    
    return list;
};
```
2차 풀이는 재귀를 사용하여 작성

