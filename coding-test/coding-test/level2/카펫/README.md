# 문제
https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

# 참고 자료

# 답
    function solution(brown, yellow) {
        const total = brown + yellow;
        let answer = Array.from({length: Math.floor(total / 2)}, (v, i) => i + 1);
        answer.push(total);
        answer = answer.filter(n => total % n === 0);
        answer = answer.filter(n => formula(brown, n, total));
        answer = answer.sort((a, b) => b - a);

        if (answer.length === 1) {
            answer[1] = answer[0];
        }

        return answer;
    }

    function formula(brown, number, total) {
        const yellow = (brown + 4) / 2 - number;

        return total === number * yellow;
    }


# 다른 사람의 풀이
    function solution(brown, yellow) {
        const x = (brown - 12) * 0.5;
        const y = yellow - brown + 8;
        const i = ( 8 + x + Math.sqrt( Math.pow(x, 2) - (4 * y) ) ) * 0.5;
        const j = ( 8 + x - Math.sqrt( Math.pow(x, 2) - (4 * y) ) ) * 0.5;

        var answer = [i, j];
        return answer;
    }
