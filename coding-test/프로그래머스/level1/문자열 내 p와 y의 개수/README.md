# 문제
https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript#

# 참고 자료

# 답
    function solution(s){
        var p = s.match(/p/gi);
        var y = s.match(/y/gi);

        return (p != null ? p.length : 0) === (y != null ? y.length : 0) ? true : false;
    }
