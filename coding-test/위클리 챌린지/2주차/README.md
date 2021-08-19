# 문제
https://programmers.co.kr/learn/courses/30/lessons/83201#qna

# 참고 자료

# 답
    function solution(scores) {
        let answer = '';
        const n = scores.length;

        for (let i = 0; i < n; i++) {
            const self = scores[i][i];
            let total = 0;
            let min = 100;
            let max = 0;

            for (let j = 0; j < n; j++) {
                const score = scores[j][i];

                if (self === score && i !== j) {
                    min = -1;
                    max = 101;
                }
                if (min >= 0 && min > score) min = score;
                if (max <= 100 && max < score) max = score;
                total += score;
            }

            if (min === self || max === self) answer += creditCalculator(total - self, n - 1);
            else answer += creditCalculator(total, n);
        }

        return answer;
    }

    function creditCalculator(num, count) {
        const average = num / count;

        if (average >= 90) return 'A';
        else if (average >= 80) return 'B';
        else if (average >= 70) return 'C';
        else if (average >= 50) return 'D';
        else return 'F';
    }
