export default class Card {
    constructor({$target, data}) {
        this.data = data;
        this.card = document.createElement('article');
        this.card.className = 'cat-card';
        this.card.dataset.id = data.id;

        $target.append(this.card);

        this.render();
    }

    render() {
        const url = this.data.url;
        const {name, origin} = this.data.breeds.length > 0 ? this.data.breeds[0] : { name: '정보없음', origin: '정보없음' };

        const cardImage = document.createElement('img');
        cardImage.className = 'card-image';
        cardImage.classList.add('lazy');
        cardImage.dataset.src = url;

        const cardInfo = document.createElement('article');
        cardInfo.className = 'card-info';

        const catName = document.createElement('p');
        catName.claasName = 'cat-name';
        catName.innerText = name;

        const catOrigin = document.createElement('p');
        catOrigin.className = 'cat-origin';
        catOrigin.innerText = origin;

        cardInfo.append(catName);
        cardInfo.append(catOrigin);
        this.card.append(cardImage);
        this.card.append(cardInfo);
    }
}
