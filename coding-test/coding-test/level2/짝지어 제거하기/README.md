# 문제
https://programmers.co.kr/learn/courses/30/lessons/12973#qna

# 참고 자료

# 답
    function solution(s)
    {
        let arr = [...s];
        let stack = [];

        while (arr.length > 0) {
            if (stack.length > arr.length) {
                break;
            }

            if (stack[stack.length - 1] === arr[arr.length - 1]) {
                stack.pop();
            } else {
                stack.push(arr[arr.length - 1]);
            }

            arr.pop();
        }

        return stack.length === 0 ? 1 : 0;
    }
