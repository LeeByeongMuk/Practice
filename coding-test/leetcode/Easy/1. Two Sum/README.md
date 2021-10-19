# 문제
https://leetcode.com/problems/two-sum/

# 1. Two Sum

## 1차 풀이 답
``` javascript
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            if (target - nums[i] === nums[j]) return [i, j];
        }
    }
};
```
> 시간 복잡도 o(n<sup>2</sup>)

## 2차 풀이 답
``` javascript
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        
        if (map.has(diff)) return [map.get(diff), i];
        map.set(num, i);
    }
};
```
> 시간 복잡도 o(n)

