import {useEffect} from "react";

function useOnMounted(effect) {
    useEffect(effect, []);
}