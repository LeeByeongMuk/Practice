# 문제
https://programmers.co.kr/learn/courses/30/lessons/42628?language=javascript

# 참고 자료

# 답
    function solution(operations) {
        let answer = [];
        let arr = [];

        operations.forEach((item) => {
            const operator = item[0];

            if (operator === 'I') {
                const num = Number(item.slice(2, item.length));
                arr.push(num);
            } else if (item === 'D 1') {
                const max = Math.max(...arr);
                const idx = arr.indexOf(max);
                arr.splice(idx, 1);
            } else if (item === 'D -1') {
                const min = Math.min(...arr);
                const idx = arr.indexOf(min);
                arr.splice(idx, 1);
            }
        });

        if (arr.length > 0) {
            const max = Math.max(...arr);
            const min = Math.min(...arr);

            answer[0] = max;
            answer[1] = min;
        } else {
            answer = [0, 0];
        }

        return answer;
    }
