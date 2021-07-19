# 문제
https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript

# 참고 자료

# 답
    function solution(n) {
        let answer = '';

        while (n !== 0) {
            const remainder = n % 3;
            n = Math.floor(n / 3);

            if (remainder === 1) {
                answer = '1' + answer;
            } else if (remainder === 2) {
                answer = '2' + answer;
            } else {
                answer = '4' + answer;
                n -= 1;
            }
        }

        return answer;
    }
