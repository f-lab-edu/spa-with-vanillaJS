// import routes from '../routes.js'

export default class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
        // window.addEventListener('popstate', () => this._loadInitialRoute());
    }
    _getCurrentURL() {
        const path = window.location.pathname;
        return path;
    }

    _matchUrlToRoute(urlSegs) {

        const matchedRoute = this.routes.find(route => route.path == urlSegs);
        console.log("match",matchedRoute)
        return matchedRoute;
    }

    _loadInitialRoute() {
        const pathnameSplit = window.location.pathname.split('/');
        const pathSegs = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : '';

        this.loadRoute(...pathSegs);
    }

    loadRoute(...urlSegs) {
        console.log("urlSegs",urlSegs)
        const matchedRoute = this._matchUrlToRoute(urlSegs);
        console.log('matching',matchedRoute)
        if (!matchedRoute) {
            throw new Error('Route not found');
        }
        matchedRoute.callback();
    }

  navigateTo(path) {
    const pathnameSplit = window.location.pathname;
    console.log('go to', path)
    console.log("previous", pathnameSplit)
    console.log("check",path !== pathnameSplit)
    if (path !== pathnameSplit) {
      window.history.pushState({}, '', path);
        this.loadRoute(path);
    } else {
       console.log('no render')
    }
        
    }
}