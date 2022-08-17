# 문제
https://www.acmicpc.net/problem/14916

# 참고 자료 

# 답
```javascript
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const c = Number(input);

function solution(c) {
    let answer = 0;
    if (c === 1 || c === 3) return -1;
    
    while (c > 0) {
        if (c % 5 === 0 || c % 2 === 1) {
            answer += 1;
            c -= 5;
        } else if (c % 2 === 0) {
            answer += 1;
            c -= 2;
        }
    }
    
    return answer;
}

console.log(solution(c));
```
