# 문제
https://programmers.co.kr/learn/courses/30/lessons/12985?language=javascript

# 참고 자료

# 답
    function solution(n,a,b)
    {
        let answer = 1;


        while (n > 1) {
            if (Math.abs(a - b) === 1 && Math.max(a, b) % 2 === 0) {
                break;
            } else {
                if (a > 1) {
                    a = formatEven(a);
                    a /= 2;
                }

                if (b > 1) {
                    b = formatEven(b);
                    b /= 2;
                }

                n /= 2;
                answer += 1;
            }
        }

        return answer;
    }

    function formatEven(num) {
        return num % 2 === 0 ? num : num + 1;
    }

# 다른 사람의 풀이
    function solution(n,a,b)
    {
        let answer = 0;

        while(a !== b) {
            a = Math.ceil(a/2);
            b = Math.ceil(b/2);
            answer++;
        }

        return answer;
    }