# 문제
https://programmers.co.kr/learn/courses/30/lessons/68936?language=javascript

# 답
    function solution(arr) {
        let answer = [0, 0];

        const checkArr = (arr) => {
            let check = true;

            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (arr[0][0] !== arr[i][j]) {
                        check = false;
                        break;
                    }
                }
                if (!check) break;
            }

            if (check) {
                answer[arr[0][0]] += 1;
            } else {
                const center = arr.length / 2;
                const top = arr.splice(0, center);
                const bottom = [...arr];

                const lt = top.map(item => item.splice(0, center));
                const rt = [...top];
                const lb = bottom.map(item => item.splice(0, center));
                const rb = [...bottom];

                checkArr(lt);
                checkArr(rt);
                checkArr(lb);
                checkArr(rb);
            }
        }

        checkArr(arr);
        return answer;
    }
