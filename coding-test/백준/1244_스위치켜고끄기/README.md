# 문제
https://www.acmicpc.net/problem/1244

# 답
```javascript
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = Number(input[0]);
const n_arr = input[1].split(' ').map(i => Number(i));
const m = Number(input[2]);
const m_arr = [];

for (let i = 3; i < 3 + m; i++) {
  m_arr.push(input[i].split(' ').map(item => Number(item)));
}

function solution(n, n_arr, m, m_arr) {
  const r = [...n_arr];

  for (let i = 0; i < m; i++) {
    const [gender, num] = m_arr[i];
    if (gender === 1) {
      for (let j = num; j <= n; j += num) {
        r[j - 1] = r[j - 1] === 1 ? 0 : 1;
      }
    } else {
      r[num - 1] = r[num - 1] === 1 ? 0 : 1;

      let count = 1;
      while ((num - count) > 0 && (num + count) <= n) {
        if (r[num - count - 1] === r[num + count - 1]) {
          r[num - count - 1] = r[num - count - 1] === 1 ? 0 : 1;
          r[num + count - 1] = r[num + count - 1] === 1 ? 0 : 1;
        } else {
          break;
        }

        count++;
      }
    }
  }

  return r.map((item, i) => {
    const check = (i + 1) % 20 === 0 && (i + 1) >= 20;
    return item + (check ? '\n' : ' ');
  }).join('');
}

console.log(solution(n, n_arr, m, m_arr));

// console.log(solution(4, [0, 0, 0, 0], 4, [[1, 1], [2, 1], [1, 2], [2, 2]]));
// console.log(solution(8, [0, 0, 0, 0, 0, 0, 0, 0], 8, [[1, 2], [1, 3], [1, 4], [1, 5], [2, 2], [2, 3], [2, 4], [2, 5]]));
// console.log(solution(25, [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 1, [[1, 1]]));
// console.log(solution(24, [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1], 2, [[1, 3], [2, 3]]));
```
