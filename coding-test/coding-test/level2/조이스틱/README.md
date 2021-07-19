# 문제
https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

# 참고 자료

# 답
    function solution(name) {
        let answer = 0;
        let min = name.length - 1;

        for (let i = 0; i < name.length; i++) {
            answer += getCount(name[i]);
        }

        for (let i = 1; i < name.length; i++) {
            if (name[i] === 'A') {
                let stack;
                for (stack = i + 1; stack < name.length; stack++) {
                    if (name[stack] !== 'A') break;
                }

                const leftMove = i - 1;
                const rightMove = name.length - stack;
                const minMove = leftMove > rightMove ? leftMove + rightMove * 2 : leftMove * 2 + rightMove;
                min = Math.min(min, minMove)
            }
        }

        answer += min;

        return answer;
        }

        function getCount(s) {
        const a = 'A'.charCodeAt(0); //96
        const z = 'Z'.charCodeAt(0); // 121
        const code = s.charCodeAt(0);
        const count = code - a;
        const reserveCount = z - code + 1;

        return Math.min(count, reserveCount);
    }
