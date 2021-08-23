# 문제
https://programmers.co.kr/learn/courses/30/lessons/84325?language=javascript

# 참고 자료

# 답
    function solution(table, languages, preference) {
        let answer = '';
        let maxScore = 0;
        let language = [];

        for (let i = 0; i < table.length; i++) {
            const arr = table[i].split(' ');
            let score = 0;

            for (let j = 0; j < languages.length; j++) {
                const cur = languages[j];
                const check = arr.indexOf(cur);
                if (check !== -1) score += (arr.length - check) * preference[j];
            }

            if (score > maxScore) {
                maxScore = score;
                language = [arr[0]];
            } else if (score === maxScore) {
                language.push(arr[0]);
            }
        }

        if (language.length > 1) language.sort();
        answer = language[0];
        return answer;
    }
