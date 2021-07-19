# 문제
https://programmers.co.kr/learn/courses/30/lessons/12924?language=javascript

# 다른 사람의 답
    function solution(n) {
        var answer = 0;
        
        for (var i=1; i<=n; i++) {
            if (n%i == 0 && i%2 == 1) {
                answer++;
            }
        }
    
        return answer;
    }

# 답
    function solution(n) {
        let answer = 0;

        for (let i = 1; i <= (n + 1) / 2; i++) {
            let number = n;
            let count = i;

            while (number > 0) {
                number -= count;
                count += 1;
            }

            if (number === 0) {
                answer += 1;
            }
        }

        if (n > 1) {
            answer += 1;
        }

        return answer;
    }
