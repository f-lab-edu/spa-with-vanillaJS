import HomePage from './pages/Home';
import Post from './pages/Post';
import Error from './pages/Error';
import Router from './router/Router';

const routes = ($element: HTMLElement): Router => {
  const router = new Router();
  router.addRoute('', () => new HomePage({ $element, router }));
  router.addRoute('/', () => new HomePage({ $element, router }));
  router.addRoute('/posts/:id', () => new Post({ $element, router }));
  router.addRoute(null, () => {
    const ErrorPage = new Error({ $element });
    ErrorPage.setComponent();
  });
  router.loadInitialRoute();
  return router;
};

export default routes;
