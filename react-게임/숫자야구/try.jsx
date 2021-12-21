import React, {memo} from 'react';

// const Try = (props) => {
const Try = memo(({tryInfo}) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});

export default Try;