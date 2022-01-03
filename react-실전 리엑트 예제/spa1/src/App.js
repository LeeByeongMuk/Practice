import React, {useEffect, useState} from 'react';

import Select from "./component/Select";

function App() {
    const [pageName, setPageName] = useState('');
    const [selected, setSelected] = useState('2');


    useEffect(() => {
        window.onpopstate = (event) => {
            console.log(document.location, event.state);
        };
    }, []);

    function onReloadPage(data, pageName) {
        window.history.pushState(data, '', `/${pageName}`);
        setPageName(pageName);
    }

    return (
        <div>
            <button onClick={() => onReloadPage('v1', 'page1')}>
                page1
            </button>
            <button onClick={() => onReloadPage('v2', 'page2')}>
                page1
            </button>

            {!pageName && <Home/>}
            {pageName === 'page1' && <Page1/>}
            {pageName === 'page2' && <Page2/>}

            <Select value={selected} setSelected={setSelected} />
        </div>
    );
}

function Home() {
    return <h1>'홈'</h1>;
}

function Page1() {
    return <h1>'page1'</h1>;
}

function Page2() {
    return <h1>'page2'</h1>;
}

export default App;