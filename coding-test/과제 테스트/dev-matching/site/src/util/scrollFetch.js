import throttling from './throttle.js';

const throttler = throttling();

export default function scrollFetch(callback) {
    window.addEventListener('scroll', () => {
        throttler.throttle(() => {
            if ((window.innerHeight + getScrollTop()) >= getDocumentHeight()) {
                callback();
            }
        }, 1000);
    });
}

function getScrollTop() {
    return window.scrollY || window.pageYOffset;
}

function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
        body.scrollHeight || 0,
        body.offsetHeight || 0,
        html.clientHeight || 0,
        html.scrollHeight || 0,
        html.offsetHeight || 0
    )
}
