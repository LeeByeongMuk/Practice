# 문제
https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript

# 참고 자료

# 답
    function solution(begin, target, words) {
        let answer = 0;

        function DFS(L, str) {
            if (L > words.length) return;
            if (str === target) {
                if (answer === 0) answer = L;
                answer = Math.min(answer, L);
            } else {
                for (let i = 0; i < words.length; i++) {
                    const word = words[i];
                    let eachCnt = 1;

                    for (let j = 0; j < word.length; j++) {
                        if (str[j] === word[j]) {
                            eachCnt++;
                        }
                    }

                    if (words[i] && eachCnt === word.length) {
                        words[i] = '';
                        DFS(L + 1, word);
                        words[i] = word;
                    }
                }
            }
        }

        DFS(0, begin);
        return answer;
    }
