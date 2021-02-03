# 문제
https://programmers.co.kr/learn/courses/30/lessons/42578

# 참고 자료

# 답
function solution(clothes) {
    var obj = {};
    var answer = 1;

    for (var i = 0; i < clothes.length; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 0) + 1;
    }

    for (var o in obj) {
        answer *= (obj[o] + 1);
    }

    return answer - 1;
}
