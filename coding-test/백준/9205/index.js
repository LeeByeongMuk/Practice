const data = '2\n' +
  '2\n' +
  '0 0\n' +
  '1000 0\n' +
  '1000 1000\n' +
  '2000 1000\n' +
  '2\n' +
  '0 0\n' +
  '1000 0\n' +
  '2000 1000\n' +
  '2000 2000';
const input = data.toString().trim().split('\n');

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift());

function solution() {
  const result = [];

  for (let i = 1; i <= T; i++) {
    const N = Number(input.shift());
    const graph = Array.from({length: N + 2}, () => []);
    const visited = Array(N + 2).fill(false);
    const queue = [];

    for (let j = 1; j <= N + 2; j++) {
      const [x, y] = input.shift().split(' ').map(Number);
      graph[j] = [x, y];
    }

    queue.push([1, 0]);
    visited[1] = true;

    while (queue.length) {
      const [node, count] = queue.shift();

      if (node === N + 2) {
        result.push('happy');
        break;
      }

      for (let j = 1; j <= N + 2; j++) {
        const [x, y] = graph[j];
        const [curX, curY] = graph[node];
        const distance = Math.abs(x - curX) + Math.abs(y - curY);

        if (!visited[j] && distance <= 1000) {
          visited[j] = true;
          queue.push([j, count + 1]);
        }
      }
    }

    if (!result[i - 1]) {
      result.push('sad');
    }
  }

  return result.join('\n');
}

console.log(solution());