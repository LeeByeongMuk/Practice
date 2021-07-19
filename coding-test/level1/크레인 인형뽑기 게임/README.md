# 문제
https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

# 참고 자료

# 답
    function solution(board, moves) {
        let answer = 0;
        let stack = [];

        for (let i = 0; i < moves.length; i++) {
            const move = moves[i] - 1;
            const index = board.findIndex(arr => arr[move] !== 0);

            if (index == -1) {
                continue;
            }

            const lastData = stack[stack.length - 1];
            const item = board[index][move];
            board[index][move] = 0;

            if (lastData === item) {
                stack.pop();
                answer += 2;
            } else if (lastData !== 0) {
                stack.push(item);
            }
        }

        return answer;
    }
