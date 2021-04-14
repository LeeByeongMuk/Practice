# 문제
https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript

# 참고 자료

# 답
    function solution(s) {
        return s.toLowerCase().split(' ').map(item => {
            return item.slice(0, 1).toUpperCase() + item.slice(1);
        }).join(' ');
    }
