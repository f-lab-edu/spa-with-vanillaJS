// App.js
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Router from './router/Router.js'
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
        this.header = new Header({ $element: this.$element.querySelector('header') });
        this.footer = new Footer({ $element: this.$element.querySelector('footer') });
        this.router = new Router(routes(this.$element.querySelector('main')));
    }
}