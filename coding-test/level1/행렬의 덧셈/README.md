# 문제
https://programmers.co.kr/learn/courses/30/lessons/12950?language=javascript

# 참고 자료

# 답
    function solution(arr1, arr2) {
        let answer = arr1.reduce((acc, cur, index) => {
            let data = cur.reduce((acc2, cur2, index2) => {
                acc2[index2] = arr1[index][index2] + arr2[index][index2];
                return acc2;
            }, []);

            acc.push(data);
            return acc;
        }, []);


        return answer;
    }
