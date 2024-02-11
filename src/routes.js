import HomePage from './pages/Home.js'
import Post from './pages/Post.js'


const routes = ($element) => [
    { path: '', renderTemplate: () =>  new HomePage({ $element })},
    { path: '/', renderTemplate: () => new HomePage({ $element })},
    { path: '/posts/:id', renderTemplate: () =>  new Post({ $element })},
];
export default routes;