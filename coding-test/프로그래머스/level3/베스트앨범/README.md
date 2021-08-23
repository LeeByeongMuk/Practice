# 문제
https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

# 참고 자료

# 답
    function solution(genres, plays) {
        let answer = [];
        let totalArr = [];
        let numsObj = {};
        let stack = 0;

        while (genres.length > 0) {
            const genre = genres.shift();
            const play = plays.shift();
            const idx = totalArr.findIndex(i => i.genre === genre);

            if (idx === -1) {
                totalArr.push({
                    genre: genre,
                    play: play
                });
                numsObj[genre] = [];
            } else {
                totalArr[idx].play += play;
            }

            numsObj[genre].push({
                key: stack,
                play: play
            });

            if (numsObj[genre].length > 2) {
                numsObj[genre] = numsObj[genre].sort((a, b) => {
                    return b.play - a.play
                });

                numsObj[genre].pop();
            }

            stack += 1;
        }

        totalArr = totalArr.sort((a, b) => {
            return b.play - a.play;
        });

        totalArr.forEach((item, index) => {
            const nums = numsObj[item.genre].sort((a, b) => {
                return b.play - a.play;
            });

            nums.forEach((item2) => {
                answer.push(item2.key);
            });
        });

        return answer;
    }
