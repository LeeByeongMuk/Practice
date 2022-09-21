# 문제

https://www.acmicpc.net/problem/21317

# 참고 자료

# 답

```javascript
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, n).map(item => item.split(' ').map(Number));
const k = Number(input[n]);

function solution() {
  let result = Number.MAX_SAFE_INTEGER;

  /** e: 에너지, loc: 위치, useBigJump: 매우 큰 점프 사용 */
  const move = (e, loc, useBigJump) => {
    if (loc >= n) return;
    if (loc === n - 1) {
      result = Math.min(result, e);
      return;
    }

    /* s: 1딘 점프  b: 2단 점프 */
    const [s, b] = arr[loc];
    move(e + s, loc + 1, useBigJump);
    move(e + b, loc + 2, useBigJump);

    if (!useBigJump) {
      move(e + k, loc + 3, true);
    }
  }

  move(0, 0, false);
  return result;
}

console.log(solution());
```
