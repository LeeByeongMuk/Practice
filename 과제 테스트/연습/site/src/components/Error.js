export default class Error {
    constructor({$target}) {
        this.$target = $target;
        this.errorData = null;

        this.render();
    }

    setState(nextData) {
        this.errorData = nextData;
        this.render();
    }

    render() {
        if (!this.errorData) return;

        this.$target.innerHTML = '';

        const errorSection = document.createElement('section');
        errorSection.className = 'error-section';

        const errorImage = document.createElement('img');
        errorImage.className = 'error-image';
        errorImage.src = '/src/img/squarecat.jpg';

        const statusCode = document.createElement('p');
        statusCode.className = 'status-code';
        statusCode.innerText = this.errorData.status;

        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.innerText = this.errorData.message;

        const returnBtn = document.createElement('button');
        returnBtn.className = 'return-btn';
        returnBtn.type = 'button';
        returnBtn.innerText = '돌아가기';

        returnBtn.addEventListener('click', () => {
            location.reload();
        });

        errorSection.append(errorImage);
        errorSection.append(statusCode);
        errorSection.append(errorMessage);
        errorSection.append(returnBtn);

        this.$target.append(errorSection);
    }
}
