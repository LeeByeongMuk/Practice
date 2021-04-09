# 문제
https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

# 참고 자료

# 답
    function solution(s, n) {
        let answer = '';

        for (let i = 0; i < s.length; i++) {
            answer = answer + charAscii(s[i], n);
        }

        return answer;
    }

    function charAscii(s, n) {
        if (s == ' ') return ' ';

        const ascii = s.charCodeAt(0);
        const code = ascii <= 90 ?
            (ascii + n > 90 ? 65 + (ascii + n - 91) : ascii + n) :
            (ascii + n > 122 ? 97 + (ascii + n - 123) : ascii + n);

        return String.fromCharCode(code);
    }
