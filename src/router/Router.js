export default class Router {
    constructor() {
        this.routes = [];
        this.data = {};
        // history api에서 경로가 변경될 경우 새로고침 없이 재랜더링 수행
        window.addEventListener('popstate', () => this.loadInitialRoute());
    }

    addRoute(path, renderTemplate) {
        this.routes.push({ path, renderTemplate });
    }

    // 현재 url 경로 추출
    _getCurrentURL() {
        const path = window.location.pathname;
        return path;
    }

    _parseQueryParameters() {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        for (let param of params) {
            this.data[param[0]] = param[1];
        }
    }

    // 동적으로 생성된 routes에서 해당 경로가 존재하는지 확인
    _matchUrlToRoute(urlSegs) {
        try {
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
        } catch {
            return false;
        }
        
    }

    // path 추출 및 해당 경로에 대한 컴포넌트 랜더링
    loadInitialRoute() {
        this._parseQueryParameters();
        const pathnameSplit = this._getCurrentURL().split('/');
        const pathSegs = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : '';
        this._loadRoute(...pathSegs);
    }

    _loadRoute(...urlSegs) {
        const matchedRoute = this._matchUrlToRoute(urlSegs);
        if (!matchedRoute) {
            const routeWithNullPath = this.routes.find(route => route.path === null);
            routeWithNullPath.renderTemplate();
            
        } else {
            matchedRoute.renderTemplate();
        }
    }

     // 해당 경로 history에 push
    navigateTo(path) {
        const pathnameSplit = this._getCurrentURL();
        if (path !== pathnameSplit) {
            window.history.pushState(null, '', path);
            const popStateEvent = new PopStateEvent('popstate', { state: null });
            dispatchEvent(popStateEvent);
        } else {
            console.log('no render')
        }

    }

}