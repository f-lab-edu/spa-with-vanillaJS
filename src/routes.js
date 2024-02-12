import HomePage from './pages/Home.js'
import Post from './pages/Post.js'
import Error from './components/Error.js'
import Router from './router/Router.js'

const routes = ($element) => {
    const router = new Router;
    router.addRoute('', () => new HomePage({ $element, router }));
    router.addRoute('/', () => new HomePage({ $element, router }));
    router.addRoute('/posts/:id', () => new Post({ $element, router }));
    router.addRoute(null, () => new Error({ $element,router}));
    router.loadInitialRoute();
    return router
};

export default routes;
