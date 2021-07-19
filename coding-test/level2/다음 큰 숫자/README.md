# 문제
https://programmers.co.kr/learn/courses/30/lessons/12911?language=javascript

# 참고 자료

# 답
    function solution(n) {
        let answer = n;
        const check = checkNumber(n);

        while (true) {
            answer += 1;

            if (check === checkNumber(answer)) break;
        }

        return answer;
    }

    function checkNumber(n) {
        return n.toString(2).split('').filter(e => Number(e) === 1).length;
    }
