// App.js
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Router from './router/Router.js'
import routes from './routes.js'
import Component from './core/Components.js'
import styles from './App.module.css'

export default class App extends Component {
    constructor($app) {
        $app.innerHTML = '';
        super($app);
        this.setup();
        this.render();
  }

  template() {
    return `
      <header></header>
      <main class = "${styles.appMain}"></main>
      <footer></footer>
    `;
  }
    setEvent() {
        this.header = new Header({ $app: this.$app.querySelector('header') });
        this.footer = new Footer({ $app: this.$app.querySelector('footer') });
        this.router = new Router(routes(this.$app.querySelector('main')));
    }
}