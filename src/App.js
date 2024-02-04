
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Router from './router/Router.js'
import routes from './routes.js'

const App = (app) => {
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    app.appendChild(header);
    app.appendChild(main);
    app.appendChild(footer);

    
    const render = () => {
        const router = new Router(routes(main));
        router;
        header.innerHTML = '';
        footer.innerHTML = '';

        new Header({ app: header });
        new Footer({ app: footer });
    }

    // window.addEventListener('popstate', () => {
    //     const currentPath = window.location.pathname;
    //     const router = new Router(routes(main));
    //     router.navigateTo(currentPath);
    // });
    render();
}


export default App;
