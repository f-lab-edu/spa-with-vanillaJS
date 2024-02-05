// App.js
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Router from './router/Router.js'
import routes from './routes.js'
import Component from './core/Components.js'

export default class App extends Component {
  constructor($app) {
      super($app);
      this.setup();
        this.render();
        this.header = new Header({ $app: this.$app.querySelector('header') });
        this.footer = new Footer({ $app: this.$app.querySelector('footer') });
        this.router = new Router(routes(this.$app.querySelector('main')));
  }

  template() {
    return `
      <header></header>
      <main></main>
      <footer></footer>
    `;
  }
}