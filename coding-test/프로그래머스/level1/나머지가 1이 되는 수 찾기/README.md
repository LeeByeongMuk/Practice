# 문제
https://school.programmers.co.kr/learn/courses/30/lessons/87389?language=javascript

# 답

``` javascript
function solution(n) {
    var answer = 1;
    
    while (n % answer !== 1) {
        answer++;
    }
    
    return answer;
}
```
