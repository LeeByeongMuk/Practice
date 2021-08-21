# 문제
https://programmers.co.kr/learn/courses/30/lessons/77885#qna

# 문제 풀이
    숫자가 짝수면 + 1
    홀수면 공식
    num + 2 ** (num bit의 뒤에서 연속된 1의 수 - 1)

# 답
    function solution(numbers) {
        let answer = [];

        for (let n of numbers) {
            if (n % 2 === 0) {
                answer.push(n + 1);
            } else {
                const bit = n.toString(2);
                const zero = ('0' + n.toString(2)).lastIndexOf('0');
                const oneCnt = bit.length - (zero > 0 ? zero : 0);
                answer.push(n + 2 ** (oneCnt - 1));
            }
        }

        return answer;
    }
