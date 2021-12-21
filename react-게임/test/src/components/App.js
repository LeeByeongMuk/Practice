import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./Login";

function App() {

    return (
        <div className="App">
            <nav>
                <button>로그인</button>
                <button>회원가입</button>
            </nav>

            <Login/>
        </div>
    );
}

export default App;
