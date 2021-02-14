# 문제
https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

# 참고 자료

# 답
    function solution(n)
    {   
        var answer = (n + '').split('').reduce((acc, cur) => acc + Number(cur), 0);

        return answer;
    }
