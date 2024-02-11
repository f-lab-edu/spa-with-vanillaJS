import styles from '../assets/css/Header.module.css'
import Component from '../core/Components.js'

export default class Header extends Component {
    constructor({ $element }) {
        super($element);
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
        const logoBtn = document.querySelector('div.' + styles.leftLogo);
        logoBtn.addEventListener('click', (e) => {
            const currentPath = window.location.pathname;
            if (currentPath !== "/") {
                window.history.pushState(null, '', '/');
                const popStateEvent = new PopStateEvent('popstate', { state: null });
                dispatchEvent(popStateEvent);
            }
        });
    }
}

