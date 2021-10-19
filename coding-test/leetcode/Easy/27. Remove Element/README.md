# 문제
https://leetcode.com/problems/remove-element/

# 27. Remove Element

## 1차 풀이 답
``` javascript
var removeElement = function(nums, val) {
    let lt = 0;
    let rt = nums.length - 1;
    
    while (lt <= rt) {
        while (nums[rt] === val) {
            rt--;
            nums.pop();
        }
        
        if (nums[lt] === val) {
            nums[lt] = nums[rt];
            nums[rt] = val;
            nums.pop();
            rt--;
        }
        lt++;
    }
};
```
> 시간 복잡도 o(n)

<br>

## 2차 풀이 답
``` javascript
var removeElement = function(nums, val) {
    let p = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[p] = nums[i];
            p++;
        }
    }
    
    return p;
    
};
```
> 시간 복잡도 o(n)


