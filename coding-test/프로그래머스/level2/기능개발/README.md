# 문제
https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

# 참고 자료

# 답
function solution(clothes) {
    var answer = [];
    var endDays = [];
    var maxDay;
    var stack = 0;

    for (var i in progresses) {
        var day = Math.ceil((100 - progresses[i]) / speeds[i]);

        endDays.push(day);
    }

    maxDay = endDays[0];

    for (var d = 0; d < endDays.length; d++) {
        if (endDays[d] <= maxDay) {
            stack += 1;
        } else {
            answer.push(stack);
            maxDay = endDays[d];
            stack = 1;
        }

        if (!endDays[d + 1]) {
            answer.push(stack++);
        }
    }

    return answer;
}
