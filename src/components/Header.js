import '../assets/style/components/Header.css'
import Component from '../core/Components.js'

class Header extends Component {
    constructor({ $app }) {
        super($app);
        this.setup();
    this.render();
    }

    template() {
        return `
            <header class = "menu">
                <div id="left-logo"> <span>Tost</span>tech</div>
                <div id = "right-menu">
                    <div id="page">디자인</div>
                    <div id="page">개발</div>
                    <div id="page">채용 바로가기</div>
                </div>  
            </header>
        `;
    }

    setEvent() {
        const logoBtn = document.getElementById('left-logo');
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

export default Header;
