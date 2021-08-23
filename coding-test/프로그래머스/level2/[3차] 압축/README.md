# 문제
https://programmers.co.kr/learn/courses/30/lessons/17684?language=javascript#

# 참고 자료

# 답
    function solution(msg) {
        let answer = [];
        let msgArr = msg.split('');
        let dArr = Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));

        while (msgArr.length > 0) {
            let data = msgArr.shift();

            while (true) {
                let checkData = data + msgArr[0];

                if (dArr.indexOf(checkData) === -1) {
                    dArr.push(checkData);
                    answer.push(dArr.indexOf(data) + 1);
                    break;
                } else {
                    data = data + msgArr.shift();
                }
            }
        }


        return answer;
    }
