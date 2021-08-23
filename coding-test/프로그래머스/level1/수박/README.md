# 문제
https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript

# 참고 자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

# 답
    function solution(n) {
        var answer = '';

        for (var i = 0; i < n; i++) {

            answer += (i % 2) === 0 ? '수' : '박';
        }

        return answer;
    }

# 다른 사람의 답
    function solution(n) {
        var answer = '수박'.repeat(n).slice(0, n);

        return answer;
    }
