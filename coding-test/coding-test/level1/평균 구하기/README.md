# 문제
https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript

# 참고 자료

# 답
function solution(arr) {
    var answer = 0;
    var total = arr.reduce((acc, cur) => acc + cur, 0);

    return total / arr.length;
}
