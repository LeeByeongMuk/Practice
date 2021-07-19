# 문제
https://programmers.co.kr/learn/courses/30/lessons/17682

# 참고 자료

# 답
    function solution(dartResult) {
        let answer = 0;
        let numberRegex = /\d/;
        let optionRegex = /[S,D,T,#]/;
        let arr = [];

        for (let i = 0; i < dartResult.length; i++) {
            const current = dartResult[i];

            if (numberRegex.test(current)) {
                if (numberRegex.test(dartResult[i - 1])) {
                    arr[arr.length - 1] = +(arr[arr.length - 1] + current);
                } else {
                    arr.push(+current);
                }
            } else {
                if (optionRegex.test(current)) {
                    arr[arr.length - 1] = getValue(arr[arr.length - 1], current);
                } else {
                    for (let i = 1; i <= (arr.length > 1 ? 2 : arr.length); i++) {
                        arr[arr.length - i] = arr[arr.length - i] * 2;
                    }
                }
            }
        }

        answer = arr.reduce((acc, cur) => {
            return acc + cur;
        }, 0);
        return answer;
        }

        function getValue(number, option) {
        switch (option) {
            case 'S':
                return number;

            case 'D':
                return number**2;

            case 'T':
                return number**3;

            case '#':
                return -number;
        }
    }
