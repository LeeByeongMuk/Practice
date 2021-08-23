import { setItem } from '../util/sessionStorage.js';

export default class SearchBar {
    constructor({$target, keywords, onSearch, onRandom}) {
        this.recent = keywords;
        this.onSearch = onSearch;
        this.onRandom = onRandom;
        this.section = document.createElement('section');
        this.section.className = 'searching-section';

        $target.append(this.section);

        this.render();

        this.focusOnSearchBox();
    }

    focusOnSearchBox() {
        const searchBox = document.querySelector('.search-box');
        searchBox.focus();
    }

    addRecentKeyword(keyword) {
        if (this.recent.length > 4) return;
        if (this.recent.includes(keyword)) return;

        this.recent.push(keyword);
        setItem('keywords', this.recent);

        this.render();
    }

    searchByKeyword(keyword) {
        if (keyword.length === 0) return;

        this.addRecentKeyword(keyword);
        this.onSearch(keyword);
    }

    deleteKeyword() {
        const searchBox = document.querySelector('.search-box');
        searchBox.value = '';
    }

    render() {
        this.section.innerHTML = '';

        const ramdomBtn = document.createElement('span');
        ramdomBtn.className = 'random-btn';
        ramdomBtn.innerText = '🐱';

        const wrapper = document.createElement('div');
        wrapper.className = 'search-box-wrapper';

        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.placeholder = '고양이를 검색하세요.';

        const recentKeywords = document.createElement('div');
        recentKeywords.className = 'recent-keywords';

        this.recent.map(keyword => {
            const link = document.createElement('button');
            link.className = 'keyword';
            link.innerText = keyword;


            link.addEventListener('click', () => {
                this.searchByKeyword(keyword);
            });

            recentKeywords.append(link);
        });

        ramdomBtn.addEventListener('click', this.onRandom);
        searchBox.addEventListener('focus', this.deleteKeyword);
        searchBox.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.searchByKeyword(searchBox.value);
            }
        });

        wrapper.append(searchBox);
        wrapper.append(recentKeywords);

        this.section.append(ramdomBtn);
        this.section.append(wrapper);
    }
}
