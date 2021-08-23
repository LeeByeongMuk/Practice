export default function throttling() {
    let throttleEvent;

    return {
        throttle(callback, second) {
            if (!throttleEvent) {
                throttleEvent = setTimeout(() => {
                    callback();
                    throttleEvent = null;
                }, second);
            }
        }
    }
}
