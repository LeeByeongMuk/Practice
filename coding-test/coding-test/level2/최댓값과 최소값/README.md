# 문제
https://programmers.co.kr/learn/courses/30/lessons/12939?language=javascript

# 참고 자료

# 답
    function solution(s) {
        s = s.split(' ').sort((a, b) => a - b);
        let answer = `${s[0]} ${s[s.length - 1]}`;

        return answer;
    }

# 다른 사람의 답
    function solution(s) {
        const arr = s.split(' ');

        return Math.min(...arr)+' '+Math.max(...arr);
    }