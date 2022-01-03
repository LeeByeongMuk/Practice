import React, {useState, useRef, useEffect} from 'react';

export default function App() {
    const timeIdRef = useRef(-1);
    useEffect(() => {
        timeIdRef.current = setTimeout(() => {}, 1000);
    });
    useEffect(() => {
        if (timeIdRef.current >= 0) {
            clearTimeout(timeIdRef.current);
        }
    })
}