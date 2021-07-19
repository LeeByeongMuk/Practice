# 문제
https://programmers.co.kr/learn/courses/30/lessons/12913

# 참고 자료

# 답
    function solution(land) {
        for (let i = land.length - 2; i >= 0; i--) {
            const current = [...land[i + 1]];

            for (let j = 0; j < 4; j++) {
                const copy = [...current];
                copy[j] = 0;
                land[i][j] = land[i][j] + Math.max(...copy);
            }
        }

        let answer = Math.max(...land[0]);
        return answer;
    }
