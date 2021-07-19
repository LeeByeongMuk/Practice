# 문제
https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

# 참고 자료

# 답
    function solution(num) {
        var answer = 0;

        while (num !== 1) {
            if (answer >= 500) {
                answer = -1;
                break;
            }

            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = num * 3 + 1;
            }

            answer++;
        }

        return answer;
    }
