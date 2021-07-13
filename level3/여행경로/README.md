# 문제
https://programmers.co.kr/learn/courses/30/lessons/43164?language=javascript

# 참고 자료

# 답
    function solution(tickets) {
        let answer = [];
        const n = tickets.length;
        let arr = [];
        arr.push('ICN');
    
        function DFS(L) {
            if (L > n) return;
            if (L === n) {
                if (!answer.length || answer.join('') > arr.join('')) {
                    answer = [...arr]
                }
            } else {
                tickets.forEach((ticket, i) => {
                    if (ticket.length > 0 && arr[arr.length - 1] === ticket[0]) {
                        tickets[i] = [];
                        arr.push(ticket[1]);
                        DFS(L+1);
                        tickets[i] = ticket;
                        arr.pop();
                    }
                });
            }
        }
    
        DFS(0);
        return answer;
    }
