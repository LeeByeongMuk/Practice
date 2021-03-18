# 문제
https://programmers.co.kr/learn/courses/30/lessons/17681

# 참고 자료
https://medium.com/gdana/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%ED%8A%B8-%EC%97%B0%EC%82%B0%EC%9E%90-5f772ffa35e8

# 답
    function solution(n, arr1, arr2) {
        let answer = [];

        for (let i = 0; i < n; i++) {
            let data = convertBNS(n, (arr1[i] | arr2[i]));
            data = data.replace(/1/g, '#').replace(/0/g, ' ');

            answer.push(data);
        }

        return answer;
        }

        function convertBNS(n, data) {
        return data.toString(2).padStart(n, '0');
    }
