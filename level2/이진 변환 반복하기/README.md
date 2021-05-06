# 문제
https://programmers.co.kr/learn/courses/30/lessons/70129?language=javascript

# 참고 자료

# 답
    function solution(s) {
        let answer = [0, 0];
        let regex = /0/g;

        while (s != 1) {
            const zeroArr = s.match(regex);
            const zeroLength = zeroArr ? zeroArr.length : 0;

            s = (s.replace(regex, '').length).toString(2);
            answer[0] += 1;
            answer[1] += zeroLength;
        }

        return answer;
    }
