# 문제
https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

# 참고 자료

# 답
    function solution(numbers, target) {
        let answer = 0;

        const dfs = (arr, index) => {
            if (index === numbers.length) {
                const total = arr.reduce((acc, cur) => acc + cur);

                if (total === target) {
                    answer++;
                }
            } else {
                arr[index] *= 1;
                dfs(arr, index + 1);

                arr[index] *= -1;
                dfs(arr, index + 1);
            }
        };

        dfs(numbers, 0);

        return answer;
    }
