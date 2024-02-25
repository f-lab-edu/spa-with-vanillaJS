import styles from '../assets/css/Header.module.css'
import Component from '../core/Components'
import Router from '../router/Router';

interface HeaderProps {
  $element: HTMLElement;
  router: Router;
}

export default class Header extends Component {
    private router: Router; 
    constructor({ $element, router }: HeaderProps) {
        super($element);
        this.router = router;
    }

    setComponent(): void {
        this.setup();
        this.render();
    }

    template(): string {
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

    setEvent(): void {
        this.$element.querySelector('div.' + styles.leftLogo).addEventListener('click', () => {
            this.router.navigateTo('/')
        });
    }
}
