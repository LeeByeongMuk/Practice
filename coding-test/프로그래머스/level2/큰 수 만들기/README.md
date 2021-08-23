# 문제
https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

# 참고 자료

# 답
    function solution(number, k) {
        let arr = [];
        let answer = '';

        for (let i = 0; i < number.length; i++) {
            const value = number[i];

            while (true) {
                if (k === 0) {
                    break;
                }

                if (value > arr[arr.length - 1]) {
                    arr.pop();
                    k--;
                } else {
                    break;
                }
            }

            arr.push(value);
        }

        arr.splice(number.length - k, k);
        answer = arr.join('');

        return answer;
    }
