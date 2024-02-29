import HomePage from './pages/Home';
import Post from './pages/Post';
import Error from './pages/Error';
import Router from './router/Router';

const routes = ($element: HTMLElement): Router => {
  const router = new Router();
  router.addRoute('', () => {
    const HomePageComponent = new HomePage({ $element, router });
    HomePageComponent.setComponent();
  });
  router.addRoute('/', () => {
    const HomePageComponent = new HomePage({ $element, router });
    HomePageComponent.setComponent();
  });
  router.addRoute('/posts/:id', () => {
    const PostPageComponent = new Post({ $element, router });
    PostPageComponent.setComponent();
  });
  router.addRoute(null, () => {
    const ErrorPage = new Error({ $element });
    ErrorPage.setComponent();
  });
  router.loadInitialRoute();
  return router;
};

export default routes;
