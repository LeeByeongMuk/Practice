# 문제
https://programmers.co.kr/learn/courses/30/lessons/77884?language=javascript

# 답
    function solution(left, right) {
        let answer = 0;

        for (let i = left; i <= right; i++) {
            if (numberMineralCount(i) % 2 === 0) {
                answer += i;
            } else {
                answer -= i;
            }
        }

        return answer;
    }

    function numberMineralCount(num) {
        let count = 0;

        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                count++;
                if (i * i < num) count++;
            }
        }

        return count;
    }

# 다른 사람의 답
    function solution(left, right) {
        var answer = 0;
        for (let i = left; i <= right; i++) {
            if (Number.isInteger(Math.sqrt(i))) {
                answer -= i;
            } else {
                answer += i;
            }
        }
        return answer;
    }