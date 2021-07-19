# 문제
https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript

# 참고 자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join


# 답
    function solution(n) {
        var answer = String(n).split('').sort((a, b) => b - a).reduce((acc, cur) => acc + cur, '');

        return Number(answer);
    }

# 다른 사람의 답
    function solution(n) {
        const newN = n + "";
        const newArr = newN
            .split("")
            .sort()
            .reverse()
            .join("");

        return +newArr;
    }
