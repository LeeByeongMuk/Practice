const React = require('react');

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (parseInt(value) === first * second) {
            setResult(`${value} 정답!`);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        } else {
            setResult('떙');
            setValue('');
        }

        inputRef.current.focus();
    }

    return (
        <>
            <div>{first} 곱하기 {second}는?</div>

            <form onSubmit={onSubmit}>
                <input ref={inputRef}
                       type="number"
                       value={value}
                       onInput={onChangeInput}/>
                <button type="submit">입력!</button>
            </form>

            <div>{result}</div>
        </>
    );
}

module.exports = GuGuDan;