# 문제
https://leetcode.com/problems/valid-palindrome/

# 125. Valid Palindrome

## 1차 풀이 답
``` javascript
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let result = true;
    let lt = 0;
    let rt = str.length - 1;
    
    while (result && lt <= rt) {
        if (str[lt] !== str[rt]) result = false;
        lt++;
        rt--;
    }
    
    return result;
};
```
Two Pointers 알고리즘을 사용해여 풀이   
문제의 의도는 1차 풀이 방식이 맞는거 같다.

## 2차 풀이 답
``` javascript
var twoSum = function(nums, target) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return str === str.split('').reverse().join('');
};
```
자바스크립트 내장 메소드를 활용해 풀이   




