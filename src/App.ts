import Header from './components/Header'
import Footer from './components/Footer'
import routes from './routes'
import Component from './core/Components'
import styles from './assets/css/App.module.css'

interface AppProps {
  $element: HTMLElement;
}

export default class App extends Component {
    private router: any; // Replace 'any' with the actual type of your router
    private header: Header;
    private footer: Footer;

    constructor( $element : HTMLElement) {
        $element.innerHTML = '';
        super($element);
        
    }

    setComponent():void {
        this.render();
    }
    template(): string {
        return `
            <header></header>
            <main class = "${styles.appMain}"></main>
            <footer></footer>
        `;
    }

    setTemplate(): void {
        this.router = routes(this.$element.querySelector('main'));
      this.header = new Header({ $element: this.$element.querySelector('header'), router: this.router });
      this.header.setComponent();
      this.footer = new Footer({ $element: this.$element.querySelector('footer') });
      this.footer.setComponent();
    }
}
