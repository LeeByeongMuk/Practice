# 문제
https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

# 참고 자료

# 답
    function solution(nums) {
        let answer = 0;
        let arr = [];

        for (let i = 0; i < nums.length; i ++) {
            for (let s = i + 1; s < nums.length; s++) {
                for (let t = s + 1; t < nums.length; t++) {
                    const n = nums[i] + nums[s] + nums[t];

                    if (primeNumber(n)) {
                        arr.push(n);
                    }
                }
            }
        }

        answer = arr.length;

        return answer;
    }

    function primeNumber(number) {
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }
