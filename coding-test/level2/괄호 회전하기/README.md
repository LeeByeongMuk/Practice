# 문제
https://programmers.co.kr/learn/courses/30/lessons/76502?language=javascript

# 참고 자료

# 답
    function solution(s) {
        let answer = 0;
        let sArr = s.split('');

        for (let i = 0; i < sArr.length; i++) {
            sArr.push(sArr.shift());

            if (check(sArr)) {
                answer++;
            }
        }

        return answer;
    }

    function check(arr) {
        let checkArr = [];
        const obj = {
            '[': ']',
            '(': ')',
            '{': '}'
        };

        for (let i = 0; i < arr.length; i++) {
            if (obj[checkArr[checkArr.length - 1]] === arr[i]) {
                checkArr.pop();
            } else {
                checkArr.push(arr[i]);
            }
        }

        return checkArr.length === 0;
    }
