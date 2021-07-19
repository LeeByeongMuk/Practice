# 문제
https://programmers.co.kr/learn/courses/30/lessons/42840

# 참고 자료

# 답
    function solution(answers) {
        var answer = [];
        var userAnswer = [
            [1, 2, 3, 4, 5],
            [2, 1, 2, 3, 2 ,4 ,2 ,5],
            [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
        ];

        userAnswer.forEach(item => {
            answer.push(answers.reduce((initialValue, currentValue, index) => {
                return currentValue == item[index % item.length] ? initialValue++ : initialValue,initialValue;
           }, 0));
        });

        return answer.reduce((initialValue, currentValue, index) => {
            return currentValue === Math.max(...answer) ? initialValue.push(index + 1) : initialValue,initialValue
        }, []);
    }
