import React, {useReducer} from 'react';

export default function App() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    console.log('render');
    return (
        <>
            <p>{`name is ${state.name}`}</p>
            <p>{`age is ${state.age}`}</p>
            <input
                type="text"
                value={state.name}
                onChange={e =>
                    dispatch({type: 'setName', name: e.currentTarget.value})
                }
            />
            <input
                type="text"
                value={state.age}
                onChange={e => dispatch({type: 'setAge', age: e.currentTarget.value})}
            />
        </>
    )
}

const INITIAL_STATE = {name: 'empty', age: 0};
const MAX_AGE = 30;
function reducer(state, action) {
    switch (action.type) {
        case 'setName':
            return {...state, name: action.name};
        case 'setAge':
            if (action.age > MAX_AGE) {
                return {...state, age: MAX_AGE};
            } else {
                return {...state, age: action.age};
            }
        default:
            return {...state};
    }
}