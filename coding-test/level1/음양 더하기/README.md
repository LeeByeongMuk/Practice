# 문제
https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript


# 답
        function solution(absolutes, signs) {
            return absolutes.reduce((acc, cur, idx) => {
                return signs[idx] ? acc + cur : acc - cur;
            }, 0);
        }
