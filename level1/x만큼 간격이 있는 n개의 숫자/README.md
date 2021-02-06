# 문제
https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

# 참고 자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

# 답
    function solution(x, n) {
        var answer = [];

        for (var i = 0; i < n; i++) {
            answer.push(x * (i + 1));
        }

        return answer;
    }

# 다른 사람의 답
    function solution(x, n) {
        return Array(n).fill(x).map((v, i) => (i + 1) * v)
    }
