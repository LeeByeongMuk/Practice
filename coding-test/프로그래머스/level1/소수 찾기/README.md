# 문제
https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript

# 참고 자료

# 답
function solution(n) {
    let arr = Array.from({length: n}, (_, i) => i + 1);

    for (let i = 2; i * i <= n; i++) {
        if (arr[i - 1]) {
            for (let j = i * 2; j <= n; j += i) {
                arr[j - 1] = 0;
            }
        }
    }

    const answer = arr.filter(i => i > 1).length;

    return answer;
}
