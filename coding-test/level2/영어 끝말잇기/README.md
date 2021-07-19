# 문제
https://programmers.co.kr/learn/courses/30/lessons/12981?language=javascript

# 참고 자료

# 답
    function solution(n, words) {
        let answer = [2, 1];
        let arr = [];
        let prev = words.shift();
        arr.push(prev);

        while (words.length > 0) {
            const current = words.shift();
            let prev = arr[arr.length - 1];

            if (prev[prev.length - 1] === current[0] && arr.indexOf(current) === -1) {
                if (words.length === 0) {
                    answer = [0, 0];
                    continue;
                }

                if (answer[0] === n) {
                    answer[0] = 1;
                    answer[1] += 1;
                } else {
                    answer[0] += 1;
                }

                arr.push(current);
            } else {
                break;
            }
        }

        return answer;
    }

# 다른 사람의 답
    function solution(n, words) {
        let answer = 0;

        words.reduce((prev, now, idx) => {
            answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
            return now[now.length-1];
        }, "");
    
        return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
    }