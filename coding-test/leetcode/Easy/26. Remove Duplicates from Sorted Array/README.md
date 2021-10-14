# 문제
https://leetcode.com/problems/remove-duplicates-from-sorted-array/

# 26. Remove Duplicates from Sorted Array

## 1차 풀이 답
```
var removeDuplicates = function(nums) {
    let lt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[lt]) {
            nums[lt + 1] = nums[i];
            lt++;
        }
    }
    return lt + 1;
};
```
> 시간 복잡도 o(n)


