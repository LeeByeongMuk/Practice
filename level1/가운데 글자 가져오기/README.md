# 문제
https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

# 참고 자료

# 답
    function solution(s) {
        s = s.split('');
        var sLength = s.length;

        if (sLength % 2 === 0) {
            var center = sLength / 2;
            return s[center - 1] + s[center];
        } else {
            return s[(sLength - 1) / 2];
        }
    }
