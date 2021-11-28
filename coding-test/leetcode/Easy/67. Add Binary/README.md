# 문제
https://leetcode.com/problems/add-binary/

## 67. Add Binary

### 실패 답
``` javascript
var addBinary = function(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};
```
2진수를 10진수로 변환하여 더하고 다시 2진수로 변환 하여 풀이 했다.   
정수 유효 범위가 넘어가서 실패

<br>

### 1차 풀이 답
``` javascript
var addBinary = function(a, b) {
    let result = '';
    let aIdx = a.length - 1;
    let bIdx = b.length - 1;
    let num = 0;
    
    while (aIdx >= 0 || bIdx >= 0) {
        const aNum = parseInt(a[aIdx] ? parseInt(a[aIdx]) : '0');
        const bNum = parseInt(b[bIdx] ? parseInt(b[bIdx]) : '0');
        const sum = aNum + bNum + num;
        const curBit = sum % 2;
        
        num = Math.floor(sum / 2);
        result = curBit + result;
        aIdx--;
        bIdx--;
    }
    
    return num === 0 ? result : num + result;
};
```
while문을 활용해 하나씩 더하여 풀이

<br>

### 다른 사람의 답
``` javascript
var addBinary = function(a, b) {
    const aBigInt = BigInt('0b' + a);
    const bBigInt = BigInt('0b' + b);

    return (aBigInt + bBigInt).toString(2);
};
```
BigInt 메소드를 활용해 풀이를 할 수 있다.
