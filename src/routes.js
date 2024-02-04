import HomePage from './pages/Home.js'
import Post from './pages/Post.js'

const routes = (app) => [
    { path: '', callback: () =>  new HomePage({ app })},
    { path: '/', callback: () => new HomePage({ app })},
    { path: '/posts/:id', callback: () =>  new Post({ app })},
];
export default routes;