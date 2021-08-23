# 문제
https://programmers.co.kr/learn/courses/30/lessons/12927?language=javascript

# 참고 자료

# 답
    function solution(n, works) {
        works.sort((a, b) => b - a);
        let max = works[0];

        while (n !== 0) {
            for (let i = 0; i < works.length; i++) {
                if (max === works[i]) {
                    works[i] -= 1;
                    n--;
                } else {
                    break;
                }

                if (n === 0) break;
            }

            max--;
            if (max === 0) break;
        }

        let pow = [0];
        return works.reduce((acc, cur) => {
            if (!pow[cur]) {
                pow[cur] = Math.pow(cur, 2);
            }
            return acc + pow[cur];
        }, 0);
    }
