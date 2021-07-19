# 문제
https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript

# 참고 자료
https://m.blog.naver.com/PostView.nhn?blogId=qbxlvnf11&logNo=221148517436&proxyReferer=https:%2F%2Fwww.google.com%2F

# 답
    function solution(arr) {
        let division = [...arr].sort((a, b) => a - b);

        while (division.length > 1) {
            let first = division.shift();
            let second = division.shift();

            division.push(lcm(first, second));
        }

        return division[0];
    }

    function lcm(minNum, maxNum) {
        return minNum * maxNum / gcd(minNum, maxNum);
    }

    function gcd(minNum, maxNum) {
        const remainder = maxNum % minNum;
        return remainder === 0 ? minNum : gcd(remainder, minNum);
    }
