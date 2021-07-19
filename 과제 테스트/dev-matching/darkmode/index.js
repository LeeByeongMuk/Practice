const theme = localStorage.getItem('theme');

if (theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

document.querySelector('.btn-set-scheme').addEventListener('click', toggleTheme);

function toggleTheme() {
    const curTheme = localStorage.getItem('theme')
        || (
            window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        );
    const mode =(curTheme === 'dark' ? 'light' : 'dark');

    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
}
