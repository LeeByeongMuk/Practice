# 문제
https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

# 참고 자료

# 답
    function solution(n) {
        var answer = [];
        n = n.toString().split('').reverse();

        n.forEach(i => {
            answer.push(parseInt(i));
        });

        return answer;
    }
