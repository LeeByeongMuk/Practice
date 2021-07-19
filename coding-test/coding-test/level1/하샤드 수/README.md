# 문제
https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

# 참고 자료

# 답
    function solution(x) {
        var answer = true;
        var digit = x.toString().split('').reduce((acc, cur) => {
            return acc + parseInt(cur);
        }, 0);

        if (x % digit !== 0) {
            answer = false;
        }

        return answer;
    }
