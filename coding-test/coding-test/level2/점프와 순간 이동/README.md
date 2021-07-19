# 문제
https://programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

# 참고 자료

# 답
    function solution(n)
    {
        let ans = 0;

        while (n !== 0) {
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n -= 1;
                ans += 1;
            }
        }

        return ans;
    }
