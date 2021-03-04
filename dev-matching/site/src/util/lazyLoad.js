export default function lazyLoad() {
    if ('IntersectionObserver' in window) {
        const imgs = document.querySelectorAll('img.lazy');

        let io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let targetImg = entry.target;
                    targetImg.src = targetImg.dataset.src;
                    targetImg.classList.remove('lazy');
                    observer.unobserve(targetImg);
                }
            });
        });

        imgs.forEach(img => {
            io.observe(img);
        });
    }
}
