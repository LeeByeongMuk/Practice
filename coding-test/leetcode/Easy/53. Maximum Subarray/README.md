# 문제
https://leetcode.com/problems/maximum-subarray/

# 53. Maximum Subarray

## 1차 풀이 답
``` javascript
var maxSubArray = function(nums) {
    let max = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], max + nums[i]);
        if (max > result) result = max;
    }
    
    return result;
};
```
