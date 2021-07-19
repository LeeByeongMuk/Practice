# 문제
https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

# 참고 자료

# 답
    function solution(arr) {
        var answer = [];

        if (arr.length === 1) {
            answer = [-1];
        } else {
            arr.splice(arr.indexOf(Math.min(...arr)), 1);
            answer = arr;
        }

        return answer;
    }
