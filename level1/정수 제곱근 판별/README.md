# 문제
https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

# 참고 자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

# 답
    function solution(n) {
        var answer = 0;
        var sqrt = Math.sqrt(n);

        if (sqrt % 1 === 0) {
            answer = Math.pow(sqrt + 1, 2);
        } else {
            answer = -1;
        }

        return answer;
    }
