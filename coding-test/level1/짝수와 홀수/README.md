# 문제
https://programmers.co.kr/learn/courses/30/lessons/12937?language=javascript

# 참고 자료

# 답
    function solution(num) {
        var arr = ["Even", "Odd"];

        return arr[Math.abs(num) % 2];
    }
