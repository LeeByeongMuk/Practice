# 문제
https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

# 참고 자료

# 답
    function solution(arr) {
        const [a, b] = arr;

        let width = '*'.repeat(a);

        for (let i = 0; i < b; i++) {
            console.log(width);
        }
    }
