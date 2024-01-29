
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomePage from './pages/Home.js'
import Post from './pages/Post.js'

const App = (app) => {
    const render = () => {
        app.innerHTML = '';
        const page = window.location.hash;
        new Header({ app });
        if (page.startsWith('#/post/')) {
            const route = parseInt(page.replace('#/post/', ''));
            new Post({ app,route });
        } else {
            new HomePage({ app });
        }
        new Footer({ app });
    }

    window.addEventListener('hashchange', render);
    window.onpopstate = render;
    render();
}

export default App;
