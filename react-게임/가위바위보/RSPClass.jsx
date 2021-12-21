import React, {useState, useRef} from 'react';

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

class RSP extends React.Component {
    state = {
        result: '',
        score: 0,
        imgCoord: '0'
    };

    interval;

    onClickBtn = (choice) => () => {
        const {imgCoord} = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if (diff === 0) {
            this.setState({
                result: '비겼습니다.'
            });
        } else if ([-1, 2].includes(diff)) {
            this.setState((prevState) => ({
                result: '이겼습니다.',
                score: prevState.score + 1
            }));
        } else {
            this.setState((prevState) => ({
                result: '졌습니다',
                score: prevState.score - 1
            }));
        }

        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 100);
        }, 2000);
    };

    changeHand = () => {
        const {imgCoord} = this.state;

        if (imgCoord === rspCoords.rock) {
            this.setState({
                imgCoord: rspCoords.scissor
            });
        } else if (imgCoord === rspCoords.scissor) {
            this.setState({
                imgCoord: rspCoords.pager
            });
        } else if (imgCoord === rspCoords.pager) {
            this.setState({
                imgCoord: rspCoords.rock
            });
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.changeHand, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {result, score, imgCoord} = this.state;
        return (
            <>
                <div id="computer"
                     style={{background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
                <div>
                    <button id="rock"
                            className="btn"
                            onClick={this.onClickBtn('rock')}>
                        바위
                    </button>
                    <button id="scissor"
                            className="btn"
                            onClick={this.onClickBtn('scissor')}>
                        가위
                    </button>
                    <button id="paper"
                            className="btn"
                            onClick={this.onClickBtn('paper')}>
                        보
                    </button>
                </div>

                <div>
                    {result}<br/>
                    점수: {score}
                </div>
            </>
        );
    }
}

export default RSP
