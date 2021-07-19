# 문제
https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

# 참고 자료

# 답
    function solution(n, lost, reserve) {
        var answer = 0;
        var arr = Array(n).fill(1);

        for (let r of reserve) {
            arr[r - 1] += 1
        }

        for (let l of lost) {
            arr[l - 1] -= 1;
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0 && arr[i - 1] === 2) {
                arr[i] += 1;
                arr[i - 1] -= 1;
            } else if(arr[i] === 0 && arr[i + 1] === 2) {
                arr[i] += 1;
                arr[i + 1] -= 1;
            }
        }

        answer = arr.filter(n => n > 0).length;

        return answer;
    }
