# 문제
https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

# 참고 자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
https://helloworldjavascript.net/pages/282-data-structures.html

# 답
    function solution(priorities, location) {
        var answer = 0;
        var arr = Object.entries(Object.assign({}, priorities));

        while (true) {
            var firstItem = arr.shift();

            if (arr.every(cur => firstItem[1] >= cur[1])) {
                answer++;

                if (firstItem[0] == location) {
                    break;
                }
            } else {
                arr.push(firstItem);
            }
        }

        return answer;
    }

# 풀이
1. arr에 [index, data] 형식으로 포멧
2. while 반복문를 통해 검증
3. 첫번째 배열을 가져오고 every 메소드를 통해 첫번째 배열보다 큰 데이터가 있는지 체크
4. 조건이 true 면 answer에 1를 더함 ( answer에 1이 더해지고 첫번쨰 배열은 제거된 상태 )
5. 조건이 false 면 arr 마지막에 첫번째 배열을 다시 추가( 첫번쨰 배열보다 큰 데이터가 있을경우 마지막으로 이동 )
6. 첫번째 배열의 값이 location과 같을때 while문 중단
