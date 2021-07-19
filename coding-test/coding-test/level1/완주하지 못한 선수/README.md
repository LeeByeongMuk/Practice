# 문제
https://programmers.co.kr/learn/courses/30/lessons/42576

# 참고 자료 
https://aidanbae.github.io/code/algorithm/bigo/

# 답
            function solution(participant, completion) {
                participant.sort();
                completion.sort();

                for (var i in participant) {
                    if (participant[i] !== completion[i]) {
                        return participant[i];
                    }
                }
            }