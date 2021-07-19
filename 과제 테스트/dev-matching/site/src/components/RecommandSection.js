export default class RecommandSection {
    constructor({$target, onClick}) {
        $target = $target.querySelector('.searching-section');
        this.onClick = onClick;
        this.section = document.createElement('article');
        this.section.className = 'recommand-section';

        $target.append(this.section);

        this.render();
    }

    // react 에 setState 유사
    setState(data) {
        this.data = data;
        this.render();
    }

    render() {
        const recommandList = document.createElement('ul');
        recommandList.className = 'recommand-list';

        const recommandData = ['cat', 'norway', 'blue'];

        recommandData.forEach(i => {
            const li = document.createElement('li');
            li.innerText = i;
            li.tabIndex = 0;

            recommandList.append(li);
        });

        recommandList.addEventListener('keydown', (e) => {
            e.preventDefault()
            const keyCode = e.keyCode;

            if (keyCode == 13) {
                this.onClick(e.target.innerText);
            }

            if (keyCode == 38) {
                e.target.previousSibling.focus();
            }

            if (keyCode == 40) {
                e.target.nextSibling.focus();
            }
        });

        this.section.append(recommandList);
    }
}
