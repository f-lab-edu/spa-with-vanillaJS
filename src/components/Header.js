import styles from '../assets/css/Header.module.css'
import Component from '../core/Components.js'

export default class Header extends Component {
    constructor({ $element,router }) {
        super($element);
        this.router = router;
        this.setup();
        this.render();
    }

    template() {
        return `
            <header class = "${styles.menu}">
                <div class = "${styles.leftLogo}"> <span>Tost</span>tech</div>
                <div class = "${styles.rightMenu}">
                    <div>디자인</div>
                    <div>개발</div>
                    <div>채용 바로가기</div>
                </div>  
            </header>
        `;
    }

    setEvent() {
            this.$element.querySelector('div.' + styles.leftLogo).addEventListener('click', () => {
            this.router.navigateTo('/')
        });
    }
}

