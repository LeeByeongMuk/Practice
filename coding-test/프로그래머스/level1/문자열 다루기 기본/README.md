# 문제
https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript

# 참고 자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN

# 답
    function solution(s) {
        const length = s.length;

        if (length === 4 || length === 6) {
            return s.split('').every((cur) => !isNaN(cur));
        } else {    
            return false;
        }
    }
