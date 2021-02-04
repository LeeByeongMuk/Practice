# 문제
https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

# 참고 자료

# 답
    function solution(participant, completion) {
        var answer = [];

        commands.forEach(item => {
            answer.push(array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)[item[2] - 1]);
        });

        return answer;
    }
