# 문제
https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript

# 참고 자료

# 답
    function solution(n, m) {
        const min = Math.min(n, m);
        let answer = [];

        answer.push(getDivisor(min, n, m));
        answer.push(getMultiple(min, n * m, n, m));

        return answer;
    }

    function getDivisor(cur, n, m) {
        while (cur !== 1) {
            if (n % cur === 0 && m % cur === 0) {
                break;
            }

            cur--;
        }

        return cur;
    }

    function getMultiple(min, max, n, m) {
        while (min !== max) {
            if (min % n === 0 && min % m === 0) {
                break;
            }

            min++;
        }

        return min;
    }
