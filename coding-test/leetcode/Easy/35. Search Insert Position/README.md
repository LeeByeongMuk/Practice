# 문제
https://leetcode.com/problems/search-insert-position/

# 35. Search Insert Position

## 1차 풀이 답
``` javascript
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid;
    
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        
        if (nums[mid] === target) {
            break;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return low > high ? low : mid;
};
```
