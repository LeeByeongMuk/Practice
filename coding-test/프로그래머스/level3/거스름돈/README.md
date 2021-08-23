# 문제
https://programmers.co.kr/learn/courses/30/lessons/12907?language=javascript

# 참고 자료

# 답
    function solution(n, money) {
        let answer;
        let dy = Array(n + 1).fill(0);
    
        for (let i = 0; i < money.length; i++) {
            dy[money[i]] += 1;
    
            for (let j = money[i] + 1; j <= n; j++) {
                dy[j] += dy[j - money[i]];
            }
        }
    
        answer = dy[n] % 1000000007;
        return answer;
    }
