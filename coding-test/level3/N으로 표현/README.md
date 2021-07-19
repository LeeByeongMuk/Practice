# 문제
https://programmers.co.kr/learn/courses/30/lessons/42895?language=javascript

# 참고 자료

# 답
    function solution(N, number) {
        let answer = -1;
        let dp = Array.from({length: 8}, () => new Set());

        for (let i = 0; i < dp.length; i++) {
            dp[i].add(parseInt(N.toString().repeat(i + 1)));

            for (let j = 0; j < i; j++) {
                for (let a of dp[j]) {
                    for (let b of dp[i - j - 1]) {
                        if (!a || !b) continue;

                        dp[i].add(a + b);
                        dp[i].add(a * b);
                        if (a > b) {
                            dp[i].add(a - b);
                            dp[i].add(a / b);
                        } else {
                            dp[i].add(b - a);
                            dp[i].add(b / a);
                        }
                    }
                }
            }

            if (dp[i].has(number)) {
                answer = i + 1;
                break;
            }
        }

        return answer;
    }
