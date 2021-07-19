# 문제
https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

# 답
    function solution(N, stages) {
        let data = [];
    
        for (let i = 1; i <= N; i++) {
            let user = stages.filter(n => n >= i);
            let failUser = user.filter(n => n <= i).length;
    
            data.push({
                stage: i,
                fail: failUser / user.length
            });
        }
    
        data.sort((a, b) => {
            if (a.fail === b.fail) {
                return a.stage - b.stage;
            } else {
                return b.fail - a.fail;
            }
        });
    
        let answer = data.map((item) => item.stage);
        return answer;
    }
