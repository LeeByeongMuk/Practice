import React, {useState, useRef, useEffect, memo} from 'react';

const rspCoords = {
    rock: '0',
    scissor: '-142px',
    pager: '-284px'
};

const scores = {
    rock: 0,
    scissor: 1,
    pager: -1
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find((v) => {
        return v[1] === imgCoord;
    })[0];
};

const RSP = memo(() => {
    const [result, setResult] = useState('');
    const [score, setScore] = useState(rspCoords.rock);
    const [imgCoord, setImgCoord] = useState('0');

    const interval = useRef(null);

    useEffect(() => {
        interval.current = setInterval(changeHand, 100);
        return () => {
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const changeHand = () => {
        if (imgCoord === rspCoords.rock) {
            setImgCoord(rspCoords.scissor);
        } else if (imgCoord === rspCoords.scissor) {
            setImgCoord(rspCoords.pager);
        } else if (imgCoord === rspCoords.pager) {
            setImgCoord(rspCoords.rock);
        }
    };

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if (diff === 0) {
            setResult('비겼습니다.');
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다.');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('졌습니다.');
            setScore((prevScore) => prevScore - 1);
        }

        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 2000);
    };

    return (
        <>
            <div id="computer"
                 style={{background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}/>
            <div>
                <button id="rock"
                        className="btn"
                        onClick={onClickBtn('rock')}>
                    바위
                </button>
                <button id="scissor"
                        className="btn"
                        onClick={onClickBtn('scissor')}>
                    가위
                </button>
                <button id="paper"
                        className="btn"
                        onClick={onClickBtn('paper')}>
                    보
                </button>
            </div>

            <div>
                {result}<br/>
                점수: {score}
            </div>
        </>
    );
});

export default RSP
