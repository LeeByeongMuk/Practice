const React = require('react');
const { Component } = React;

const WordRelay = () => {
    const [word, setWord] = React.useState('만소');
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        if (word[word.length - 1] === value[0]) {
            setWord(value);
            setValue('');
            setResult('딩동댕');
        } else {
            setValue('');
            setResult('땡');
            
        }

        inputRef.current.focus();
    }

    const onChangeInput = (e) => {
        e.preventDefault();

        setValue(e.target.value);
    }

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef}
                       value={value}
                       onChange={onChangeInput}/>
                <button type="submit">입력</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelay;