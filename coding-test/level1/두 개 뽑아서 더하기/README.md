# 문제
https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

# 참고 자료

# 답
    function solution(numbers) {
        var answer = [];
        var check = 0;

        for (let i = 0; i < numbers.length; i++) {
            while (check < numbers.length - 1) {
                check++;
                answer.push(numbers[i] + numbers[check]);
            }

            check = i + 1;
        }

        answer = answer.filter((item, index) => {
            return answer.indexOf(item) === index;
        }).sort((a, b) => a - b);

        return answer;
    }
