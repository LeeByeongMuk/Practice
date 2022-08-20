# 문제
https://school.programmers.co.kr/learn/courses/30/lessons/12946#

# 풀이
1. n - 1개의 원판을 첫번째에서 두번째로 이동
2. 첫번째의 있는 원판을 세번째로 옮김 // 결과값
3. 두번째의 있는 n - 1개의 원판을 세번째로 이동
4. n이 1이 될때까지 반복

# 답
```javascript
function solution(n) {
    return recur(n, 1, 3 ,2);
}

function recur(n, start, end, via) {
    if (n === 1) return [[start, end]];
    
    return [
        ...recur(n - 1, start, via, end),
        [start, end],
        ...recur(n - 1, via, end, start)
    ];
}
```
