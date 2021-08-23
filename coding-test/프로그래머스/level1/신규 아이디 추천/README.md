# 문제
https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript


# 답
    function solution(new_id) {
        let answer = new_id
            .toLowerCase() // 1단계
            .replace(/[^a-z-_.0-9]/g, '') // 2단계
            .replace(/[.]+/g, '.') // 3단계
            .replace(/^[.]|[.]$/g, '') // 4단계
            .replace(/^$/, 'a') // 5단계
            .slice(0, 15) // 6단계
            .replace(/[.]$/g, '');

        if (answer.length <= 2) {
            while (answer.length < 3) answer += answer[answer.length - 1];
        }

        return answer;
    }
