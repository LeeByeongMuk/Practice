# 문제
https://programmers.co.kr/learn/courses/30/lessons/68935?language=javascript

# 참고 자료
https://unikys.tistory.com/334

# 답
    function solution(n) {
        var answer = parseInt(n.toString(3).split('').reverse().join(''), 3);
        return answer;
    }
