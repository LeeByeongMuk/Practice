import React, {useState, memo} from 'react';

import Try from './try';

const getNumbers = () => {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }

    return array;
};

const NumberBaseBall = memo(() => {
    const [result, setResult]  = useState('');
    const [value, setValue]  = useState('');
    const [answer, setAnswer]  = React.useState(getNumbers());
    const [tries, setTries]  = React.useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (value === answer.join('')) {
            setResult('홈런');
            setTries((prevTries) => {
                return [
                    ...prevTries,
                    {
                        try: value,
                        result: '홈런'
                    }
                ]
            });

            alert('게임을 다시 시작합니다.');

            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;

            if (tries.length > 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }

                setTries((prevTries) => {
                    return [
                        ...prevTries,
                        {
                            try: value,
                            result: `${strike} 스트라이크, ${ball} 볼 입니다.`
                        }
                    ]
                });
                setValue('');
            }
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{result}</h1>

            <form onSubmit={onSubmit}>
                <input type="number"
                       value={value}
                       maxLength={4}
                       onChange={onChangeInput}/>
            </form>

            <div>시도: {tries.length}</div>

            <ul>
                { tries.map((v, i) => {
                    return (
                        <Try key={`${i + 1}차 시도: `} tryInfo={v} />
                    )
                })}
            </ul>
        </>

    );
});

export default NumberBaseBall;