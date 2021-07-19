# 문제
https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

# 참고 자료

# 답
    function solution(n, computers) {
        let answer = 0;
        let chk = Array.from({length: n}, () => false);

        function DFS(idx) {
            chk[idx] = true;
            for (let i = 0; i < n; i++) {
                if (!chk[i] && computers[idx][i] === 1) {
                    DFS(i);
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (!chk[i]) {
                answer++;
                DFS(i);
            }
        }

        return answer;
    }
