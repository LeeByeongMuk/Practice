export default function User({type, age, male, onChangeName, onChangeTitle}) {
    function onClick1() {
        const msg = `type: ${type}, age: ${age ? age : '알수 없음'}`;
    }

    function onClick2(name, title) {
        if (onChangeName) {
            onChangeName(name);
        }
        onChangeTitle(title);
        male ? goMalePage() : goFeMailPage();
    }

    return null;
}