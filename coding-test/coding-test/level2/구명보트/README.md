# 문제
https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

# 참고 자료

# 답
    function solution(people, limit) {
        let answer = 0;

        people.sort((a, b) => b - a);

        let firstIndex = 0;
        let secondIndex = people.length - 1;

        while (firstIndex <= secondIndex) {
            const first = people[firstIndex];

            if (first <= limit / 2) {
                answer += Math.ceil((secondIndex - firstIndex + 1) / 2);
                break;
            }

            answer++;
            firstIndex++;
            if (first + people[secondIndex] <= limit) {
                secondIndex--;
            }
        }

        return answer;
    }
