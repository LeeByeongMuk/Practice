export default function debouncing() {
    let debounceEvent;

    return {
        debounce(callback, secend) {
            clearInterval(debounceEvent);

            debounceEvent = setTimeout(() => {
                callback();
            }, second);
        }
    }
}
