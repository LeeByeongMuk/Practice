# 문제
https://leetcode.com/problems/add-two-numbers/

# 2. Add Two Numbers

## 1차 풀이 답
``` javascript
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode();
    if (!l1 && !l2) return null;
    l1 = l1 || new ListNode();
    l2 = l2 || new ListNode();
    
    let num = l1.val + l2.val;
    if (num >= 10) {
        num -= 10;
        if (!l1.next) l1.next = new ListNode();
        l1.next.val += 1;
    }
    
    node.val = num;
    node.next = addTwoNumbers(l1.next, l2.next);
    return node;
};
```

## 2차 풀이 답
``` javascript
var addTwoNumbers = function(l1, l2, up = false) {
    if (!l1 && !l2) {
        return up ? new ListNode(1) : null;
    } else if (!l1 || !l2) {
        if (!up) return l1 || l2;
        l1 = l1 || new ListNode();
        l2 = l2 || new ListNode();
    }
    
    let sum = l1.val + l2.val;
    if (up) sum += 1;
    up = sum >= 10;
    sum = sum % 10;
    return new ListNode(sum, addTwoNumbers(l1.next, l2.next, up));
};
```
더 성능이 좋게 나온 코드를 참고 해서 다시 풀어봤다.   
테스트 케이스 조건에 따라서 더 성능이 좋아지고 ES6 문법을 더 잘 활용한 코드인거 같다.

