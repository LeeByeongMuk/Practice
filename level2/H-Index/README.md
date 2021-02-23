# 문제
https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

# 참고 자료

# 답
    function solution(citations) {
        let answer = 0;
        const max = citations.length;
        let i = max;

        while (true) {
            let length = citations.filter(citation => citation >= i).length;

            if (length >= i) {
                answer = i;
                break;
            }

            i--;
        }

        return answer;
    }
