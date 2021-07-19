# 문제
https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript

# 참고 자료

# 답
    function solution(n) {
        var answer = 0;

        for (var i = 1; i <= n; i++) {
            if (n % i === 0) {
                answer += i;
            }
        }

        return answer;
    }
