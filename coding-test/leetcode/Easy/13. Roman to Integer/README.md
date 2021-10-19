# 문제
https://leetcode.com/problems/roman-to-integer/

# 13. Roman to Integer

## 1차 풀이 답
``` javascript
var romanToInt = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanToNumber(s[i]);
        if (current >= romanToNumber(s[i + 1])) {
            sum += current;
        } else {
            sum -= current;
        }
    }
    return sum;
};

function romanToNumber(s) {
    switch (s) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}
```
<br>

## 2차 풀이 답
``` javascript
var romanToInt = function(s) {
    return s.split('').reduce((acc, cur, idx, arr) => {
        const n = romanToNumber(cur);
        if (n >= romanToNumber(arr[idx + 1])) {
            return acc + n;
        } else {
            return acc - n;
        }
    }, 0);
};

function romanToNumber(s) {
    switch (s) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}
```
1차 코드에 비해 코드 줄수는 조금 줄었지만 성능상에는 크게 바뀐게 없어 보임

<br>

## 3차 풀이 답
``` javascript
var romanToInt = function(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    return s.split('').reduce((acc, cur, idx, arr) => {
        const n = roman[cur];
        if (n >= (roman[arr[idx + 1]] || 0)) {
            return acc + n;
        } else {
            return acc - n;
        }
    }, 0);
};
```
roman 표기를 숫자로 바꾸는 과정을 함수 호출에서 객체로 바꿈으로써 성능과 코드량이 개선됨

