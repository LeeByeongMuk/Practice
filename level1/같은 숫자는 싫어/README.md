# 문제
https://programmers.co.kr/learn/courses/30/lessons/12906

# 참고 자료

# 답
    function solution(arr) {
        var answer = arr.filter((item, index) => {
            return arr[index] !== arr[index + 1];
        });

        return answer;
    }
