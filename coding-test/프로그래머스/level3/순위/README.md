# 문제
https://programmers.co.kr/learn/courses/30/lessons/49191?language=javascript

# 참고 자료
    a, b, c 가 있을때
    1. a -> b 를 이길때
    2. b -> c 를 이길때
    3. a -> c 도 이긴다

# 답
    function solution(n, results) {
        let answer = 0;
        let graph = Array.from({length: n}, () => Array(n).fill(false));

        for (let [winner, loser] of results) {
            graph[winner - 1][loser - 1] = true;
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (let k = 0; k < n; k++) {
                    if (graph[i][k] && graph[j][i]) {
                        graph[j][k] = true;
                    }
                }
            }
        }

        for (let i = 0; i < n; i++) {
            let count = 0;

            for (let j = 0; j < n; j++) {
                if (graph[i][j] || graph[j][i]) {
                    count++;
                }
            }

            if (count === n - 1) {
                answer++;
            }
        }

        return answer;
    }
