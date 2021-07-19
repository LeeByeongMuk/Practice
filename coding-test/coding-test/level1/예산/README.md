# 문제
https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

# 해답
1. sort를 이용하여 작은 수 부터 정렬
2. 반복문을 통한 전체 예산 에서 작은 수 부터 차례 대로 마이너스 계산 해서 반복할때 마다 answer에 1씩 더해줌
3. 전체 예산이 0 보다 작아지면 stop

# 답
    function solution(d, budget) {
        let answer = 0;
        d.sort((a, b) => a - b);


        while (budget > 0) {
            budget -= d.shift();

            if (budget >= 0) {
                answer++;
            }
        }

        return answer;
    }
