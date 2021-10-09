import React from 'react';
import C1 from "./C1";
import {MyContext} from "./my-context";

const Context = () => {
    return (
        <div>
            <MyContext.Provider value={'change context value'}>
                <C1 />
            </MyContext.Provider>
        </div>
    )
}

export default Context;