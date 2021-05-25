# 문제
https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript

# 참고 자료

# 답
    function solution(n) {
        let answer = 0;
        let fibonacci = [0, 1];

        if (n < 2) {
            answer = fibonacci[n];
        } else {
            for (let i = 2; i <= n; i++) {
                fibonacci.push((fibonacci[i - 1] + fibonacci[i - 2]) % 1234567);
            }

            answer = fibonacci[n];
        }

        return answer;
    }
