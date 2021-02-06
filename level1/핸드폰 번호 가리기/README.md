# 문제
https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

# 참고 자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

padStart 사용해서 처리도 가능
- ie 이슈

# 답
    function solution(phone_number) {
        return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
    }
