# 문제
https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript

# 참고 자료

# 답
    function solution(skill, skill_trees) {
        let answer = skill_trees.length;

        skill_trees = skill_trees.map(tree => {
            return tree.split('').filter((item) => skill.indexOf(item) !== -1).join('');
        });

        for (let i = 0; i < skill_trees.length; i++) {
            for (let s = 0; s < skill_trees[i].length; s++) {
                if (skill[s] !== skill_trees[i][s]) {
                    answer--;
                    break;
                }
            }
        }

        return answer;
    }
