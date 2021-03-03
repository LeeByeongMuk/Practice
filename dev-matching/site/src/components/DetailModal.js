export default class DetailModal {
    constructor({$target}) {
        this.data = null;
        this.modalWrapper = document.createElement('div');
        this.modalWrapper.className = 'modal-wrapper';
        this.modalWrapper.classList.add('hidden');

        $target.append(this.modalWrapper);

        this.render();
    }

    toggleModal() {
        this.modalWrapper.classList.toggle('hidden');
    }

    setState(data) {
        this.toggleModal();
        this.data = data;
        this.render();
    }

    onClose() {
        this.toggleModal();
        this.data = null;
        this.modalWrapper.innerHTML = '';
    }

    render() {
        if (!this.data) return;

        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const modalContents = document.createElement('section');
        modalContents.className = 'modal-contents';

        const modalHeader = document.createElement('header');
        modalHeader.className = 'modal-header';

        const modalTitle = document.createElement('h4');
        modalTitle.className = 'modal-title';
        modalTitle.innerText = this.data.breeds[0].name;

        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.className = 'close-btn';
        closeBtn.innerText = 'X';

        const modalImage = document.createElement('img');
        modalImage.className = 'modal-image';
        modalImage.src = this.data.url;

        const modalInfo = document.createElement('article');
        modalInfo.className = 'modal-info';

        const catOrigin = document.createElement('p');
        catOrigin.className = 'cat-origin';
        catOrigin.innerText = this.data.breeds[0].origin;

        const catTemperament = document.createElement('p');
        catTemperament.className = 'cat-temperament';
        catTemperament.innerText = this.data.breeds[0].temperament;

        const catWidth = document.createElement('p');
        catWidth.className = 'cat-width';
        catWidth.innerText = `imperial: ${this.data.breeds[0].weight.imperial}/ metric: ${this.data.breeds[0].weight.metric}`;

        closeBtn.addEventListener('click', () => {
            this.onClose();
        });

        modalHeader.append(modalTitle);
        modalHeader.append(closeBtn);

        modalInfo.append(catOrigin);
        modalInfo.append(catTemperament);
        modalInfo.append(catWidth);

        modalContents.append(modalHeader);
        modalContents.append(modalImage);
        modalContents.append(modalInfo);

        this.modalWrapper.append(overlay);
        this.modalWrapper.append(modalContents);
    }
}
