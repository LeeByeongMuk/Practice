# 문제
https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

# 참고 자료

# 답
    function solution(s) {
        const regex = /[0-9]+/g;
        let checkObj = s.match(regex).reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        }, {});
        let answer = Array(Object.keys(checkObj).length).fill(0);

        for (const [key, value] of Object.entries(checkObj)) {
            answer[value - 1] = Number(key);
        }

        return answer.reverse();
    }
