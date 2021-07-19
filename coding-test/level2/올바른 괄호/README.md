# 문제
https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

# 참고 자료

# 답
    function solution(s){
        let answer = true;
        let arr = [];
        s = s.split('');

        if (s.filter(e => e === '(').length !== s.filter(e => e === ')').length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                arr.push(s[i]);
            } else {
                if (arr[arr.length - 1] === ')') {
                    arr.push(s[i]);
                } else {
                    arr.pop();
                }
            }
        }

        if (arr.length > 0) {
            answer = false;
        }

        return answer;
    }
