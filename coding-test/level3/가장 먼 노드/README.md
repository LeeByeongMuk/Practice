# 문제
https://programmers.co.kr/learn/courses/30/lessons/49189?language=javascript

# 참고 자료

# 답
    function solution(n, edge) {
        let answer = 0;
        let graph = Array.from({length: n}, () => []);

        for (let i = 0; i < edge.length; i++) {
            const [start, end] = edge[i];
            graph[end - 1].push(start - 1);
            graph[start - 1].push(end - 1);
        }

        let visited = Array.from({length: n}, () => false);
        let queue = [[0, 0]];
        let arr = [];
        visited[0] = true;

        while (queue.length) {
            const [node, level] = queue.shift();
            arr[level] = arr[level] ? arr[level] + 1 : 1;

            graph[node].forEach(num => {
                if (!visited[num]) {
                    visited[num] = true;
                    queue.push([num, level + 1]);
                }
            });
        }

        answer = arr[arr.length - 1];
        return answer;
    }
