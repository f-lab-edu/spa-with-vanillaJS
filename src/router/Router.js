export default class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
        
        // history api에서 경로가 변경될 경우 새로고침 없이 재랜더링 수행
        window.addEventListener('popstate', () => this._loadInitialRoute());
    }

    // 현재 url 경로 추출
    _getCurrentURL() {
        const path = window.location.pathname;
        return path;
    }

    // 동적으로 생성된 routes에서 해당 경로가 존재하는지 확인
    _matchUrlToRoute(urlSegs) {
       
    const matchedRoute = this.routes.find(route => {
        const routePathSegments = route.path.split('/').filter(Boolean);
        const currentPathSegments = urlSegs.filter(Boolean);
        if (routePathSegments.length !== currentPathSegments.length) {
            return false;
        }

        return routePathSegments.every((routePathSegment, index) => {
            return routePathSegment.startsWith(':') || routePathSegment === currentPathSegments[index];
            });
        });

        return matchedRoute;
    }

    // path 추출 및 해당 경로에 대한 컴포넌트 랜더링
    _loadInitialRoute() {
        const pathnameSplit = this._getCurrentURL().split('/');
        const pathSegs = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : '';
        this.loadRoute(...pathSegs);
    }

    loadRoute(...urlSegs) {
        const matchedRoute = this._matchUrlToRoute(urlSegs);
        if (!matchedRoute) {
            throw new Error('Route not found');
        }
        matchedRoute.renderTemplate();
    }

    // 해당 경로 history에 push
    navigateTo(path) {
        const pathnameSplit = this._getCurrentURL();
        if (path !== pathnameSplit) {
            window.history.pushState({}, '', path);
            this.loadRoute(path);
        } else {
            console.log('no render')
        }
        
    }
}