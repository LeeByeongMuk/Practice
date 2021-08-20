# 문제
https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript


# 답
        function solution(lottos, win_nums) {
            const rank = [1, 2, 3, 4, 5, 6, 6];
            let answer = [];

            let winCheck = Array.from({length: 45}, () => 0);
            for (let num of win_nums) {
                winCheck[num - 1] = 1;
            }

            let lostCount = 0;
            let setCount = 0;
            for (let num of lottos) {
                if (num === 0) lostCount++;
                if (winCheck[num - 1]) setCount++;
            }

            answer[0] = rank[rank.length - 1 - lostCount - setCount];
            answer[1] = rank[rank.length - 1 - setCount];
            return answer;
        }
