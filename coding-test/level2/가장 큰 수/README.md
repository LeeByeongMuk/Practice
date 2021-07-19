# 문제
https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

# 참고 자료

# 답
    function solution(numbers) {
        var answer = numbers.sort((a, b) => {
            a = a + '';
            b = b + '';

            return (b + a) - (a + b);
        }).join('');

        return answer[0] === '0' ? '0' : answer;
    }
