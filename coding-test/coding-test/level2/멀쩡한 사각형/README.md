# 문제
https://programmers.co.kr/learn/courses/30/lessons/62048?language=javascript

# 참고 자료
#### https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95
#### https://m.blog.naver.com/orbis1020/220664563768
#### https://m.blog.naver.com/PostView.nhn?blogId=zzinuhelios&logNo=120024685950&proxyReferer=https:%2F%2Fwww.google.com%2F

# 답
    function solution(w, h) {
        const GCD = getGCD(w, h);
        let answer = w * h - (w + h - GCD)

        return answer;
    }

    function getGCD(w, h) {
        let max = Math.max(w, h);
        let min = Math.min(w, h);
        const remainder = max % min;

        if (remainder === 0) {
            return min;
        }

        return getGCD(min, remainder);
    }

