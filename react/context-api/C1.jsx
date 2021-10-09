import React, {useContext} from "react";
import {MyContext} from "./my-context";

const C1 = () => {
    const value = useContext(MyContext);

    return <div>{value}</div>

    return (
        <MyContext.Consumer>
            {value => (
                <div>{value}</div>
            )}
        </MyContext.Consumer>
    )
}

export default C1;