# 문제
https://leetcode.com/problems/merge-sorted-array/

# 88. Merge Sorted Array

## 1차 풀이 답
``` javascript
var merge = function(nums1, m, nums2, n) {
    let lt = 0;
    let rt = 0;
    
    
    while (lt < m && rt < n) {
        if (nums1[lt] >= nums2[rt]) {
            for (let i = m; i > lt; i--) {
                nums1[i] = nums1[i - 1];
            }
            nums1[lt] = nums2[rt++];
            m++;
        } else {
            lt++;
        }
    }
    
    while (rt < n) {
        nums1[lt++] = nums2[rt++];
    }
};
```
