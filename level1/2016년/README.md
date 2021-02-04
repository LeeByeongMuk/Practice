# 문제
https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

# 참고 자료 

# 답
    function solution(a, b) {
        var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        return week[new Date(2016, a - 1, b).getDay()];
    }
