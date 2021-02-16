# 문제
https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

# 참고 자료

# 답
    function solution(s) {
        s = s.split(' ');

        var answer = s.map((item, index) => {
            return item.split('').reduce((acc, cur, i) => {
                if (i % 2 === 0) {
                    return acc + cur.toUpperCase();
                } else {
                    return acc + cur.toLowerCase();
                }
            }, '') + (s.length === index + 1 ? '' : ' ');
        }).join('');

        return answer;
    }
