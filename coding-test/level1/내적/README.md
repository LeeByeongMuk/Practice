# 문제
https://programmers.co.kr/learn/courses/30/lessons/70128?language=javascript


# 답
    function solution(a, b) {
        return a.reduce((acc, cur, idx) => {
            return acc + (cur * b[idx]);
        }, 0);
    }
