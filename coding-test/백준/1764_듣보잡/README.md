# 문제
https://www.acmicpc.net/problem/1764

# 답
```javascript
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr1 = input.slice(1, N + 1);
const arr2 = input.slice(N + 1, N + M + 1);

function solution() {
  const answer = [];
  const set = new Set();


  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    if (set.has(arr2[j])) {
      answer.push(arr2[j]);
    }
  }

  answer.sort();
  answer.unshift(answer.length);
  return answer.join('\n');
}

console.log(solution());
```
