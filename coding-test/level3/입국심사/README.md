# 문제
https://programmers.co.kr/learn/courses/30/lessons/43238?language=javascript

# 참고 자료

# 답
    function solution(n, times) {
        let answer = Number.MAX_SAFE_INTEGER;
        let lt = 1;
        let rt = Math.ceil(Math.max(...times) * n / times.length);

        while (lt <= rt) {
            const mid = Math.floor((lt + rt) / 2);
            let total = 0;

            for (let i = 0; i < times.length; i++) {
                total += Math.floor(mid / times[i]);
            }

            if (total >= n) {
                answer = Math.min(answer, mid);
                rt = mid - 1;
            } else {
                lt = mid + 1;
            }
        }

        return answer;
    }
