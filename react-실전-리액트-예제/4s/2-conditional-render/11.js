import {useState} from "react";

function Parent({user}) {
    return (
        <div>
            <p>parent</p>

            {user && <Child user={user} />}
            {/*<Child user={user} />*/}
        </div>
    )
}

function Child({user}) {
    const [v, setV] = useState(0);
    // if (user) {
    //     return null;
    // }

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.phone}</p>
        </div>
    )
}