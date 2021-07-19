# 문제
https://programmers.co.kr/learn/courses/30/lessons/12941?language=javascript

# 참고 자료

# 답
    function solution(A,B){
        var answer = 0;

        A = A.sort((a, b) => a - b);
        B = B.sort((a, b) => b - a);

        for (let i = 0; i < A.length; i++) {
            answer += A[i] * B[i];
        }

        return answer;
    }
