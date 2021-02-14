# 문제
https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

# 참고 자료

# 답
    function solution(strings, n) {
        var answer = strings.sort((a, b) => {
            var f = a[n];
            var s = b[n];

            if (f === s) {
                return a > b ? 1 : -1;
            } else {
                return f > s ? 1 : -1;
            }
        });

        return answer;
    }
