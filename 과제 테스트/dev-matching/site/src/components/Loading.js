export default class Loading {
    constructor({$target}) {
        this.spinnerWrapper = document.createElement('div');
        this.spinnerWrapper.className = 'spinner-wrapper';
        this.spinnerWrapper.classList.add('hidden');

        $target.append(this.spinnerWrapper);

        this.render();
    }

    toggleSpinner() {
        this.spinnerWrapper.classList.toggle('hidden');
    }

    render() {
        const spinnerImage = document.createElement('img');
        spinnerImage.className = 'spinner-image';
        spinnerImage.src = '/src/img/loading.gif';

        this.spinnerWrapper.append(spinnerImage);
    }
}
