function getItem(key) {
    const value = sessionStorage.getItem(key);

    return JSON.parse(value) || null;
}

function setItem(key, value) {
    if (!value) return;

    const toJson = JSON.stringify(value);

    sessionStorage.setItem(key, toJson);
}

export { getItem, setItem };
