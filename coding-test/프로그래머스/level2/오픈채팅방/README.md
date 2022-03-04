# 문제
https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript

# 답

```javascript
function solution(record) {
  var answer = [];
  const usersMap = new Map();

  for (const r of record) {
    const [action, id, name] = r.split(' ');

    if (action === 'Enter') {
      if (usersMap.has(id)) {
        usersMap.set(id, name);
      } else {
        usersMap.set(id, name);
      }

      answer.push({
        id,
        action
      });
    } else if (action === 'Leave') {
      answer.push({
        id,
        action
      });
    } else if (action === 'Change') {
      usersMap.set(id, name);
    }
  }

  return answer.map(({id, action}) => {
    const name = usersMap.get(id);
    if (action === 'Enter') {
      return `${name}님이 들어왔습니다.`
    } else {
      return `${name}님이 나갔습니다.`
    }
  });
}
```
