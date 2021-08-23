# 문제
https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

# 참고 자료

# 답
    function solution(bridge_length, weight, truck_weights) {
        let answer = 0;
        let arr = Array(bridge_length).fill(0);
        let totalWeight = 0;

        while (true) {
            answer++;
            const lastTruck = arr.pop();
            totalWeight -= lastTruck;

            if (weight >= totalWeight + truck_weights[0]) {
                const newTruck = truck_weights.shift();
                arr.unshift(newTruck);

                totalWeight += newTruck;
            } else {
                arr.unshift(0);
            }

            if (totalWeight === 0 && truck_weights.length === 0) {
                break;
            }
        }

        return answer;
    }
