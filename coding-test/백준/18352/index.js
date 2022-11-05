const data = '4 4 2 1\n' +
  '1 2\n' +
  '1 3\n' +
  '2 3\n' +
  '2 4';
const input = data.toString().trim().split('\n');


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K, X] = input[0].split(' ').map(Number);
const graph = Array.from(Array(N + 1), () => Array());

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  graph[A].push(B);
}

function solution() {
  const result = [];
  const visited = Array(N + 1).fill(false);
  const queue = [];

  for (let i = 1; i <= N; i++) {
    if (i === X) {
      queue.push([i, 0]);
      visited[i] = true;
    }

    while (queue.length) {
      const [node, count] = queue.shift();

      if (count === K) {
        result.push(node);
        continue;
      }

      for (let j = 0; j < graph[node].length; j++) {
        const nextNode = graph[node][j];

        if (!visited[nextNode]) {
          visited[nextNode] = true;
          queue.push([nextNode, count + 1]);
        }
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b).join('\n') : -1;
}

console.log(solution());
