// App.js
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import routes from './routes.js'
import Component from './core/Components.js'
import styles from './assets/css/App.module.css'

export default class App extends Component {
    constructor($element) {
        $element.innerHTML = '';
        super($element);
        this.render();
  }

  template() {
    return `
      <header></header>
      <main class = "${styles.appMain}"></main>
      <footer></footer>
    `;
  }
    setTemplate() {
      this.router = new routes(this.$element.querySelector('main'));
      this.header = new Header({ $element: this.$element.querySelector('header'),router:this.router });
      this.footer = new Footer({ $element: this.$element.querySelector('footer') });
    }
}