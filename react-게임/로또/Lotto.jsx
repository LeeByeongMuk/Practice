import React, {useState, useRef, useEffect, useMemo, useCallback, memo} from 'react';

import Ball from './Ball';

const getWinNumbers = () => {
    const candidate = Array.from({length: 45}, (v, i) => i + 1);
    const shuffle = [];

    while (shuffle.length !== 7) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }

    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);

    return [...winNumbers, bonusNumber];
};

const Lotto = memo(() => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);

    const timeouts = useRef([]);

    // componentDidMount
    useEffect(() => {
    }, []);

    // componentDidUpdate
    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            // ajax
        }
    }, []);

    useEffect(() => {
        runTimeouts();

        return () => {
            timeouts.current.forEach(v => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]);

    // 자식 컴포넌트의 props로 넘길때 useCallback 필수
    const onClickRedo = useCallback(() => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);

        timeouts.current = [];
    }, [winNumbers]);

    const runTimeouts = () => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevWinBalls) => {
                    return [
                        ...prevWinBalls,
                        winNumbers[i]
                    ];
                });
            }, (i + 1) * 1000);
        }

        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
    };

    return (
        <>
            <div>당첨 숫자</div>
            <div id="result">
                {winBalls.map((v) => <Ball key={v} number={v}/>)}
            </div>
            <div>보너스</div>
            {bonus && <Ball number={bonus}/>}
            {redo && <button type="button" onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
});

export default Lotto;