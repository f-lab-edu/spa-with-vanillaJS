interface Route {
  path: string;
  renderTemplate: () => void;
}

export default class Router {
  private routes: Route[];
  public data: { [key: string]: string };

  constructor() {
    this.routes = [];
    this.data = {};

    // history api에서 경로가 변경될 경우 새로고침 없이 재랜더링 수행
    window.addEventListener('popstate', () => this.loadInitialRoute());
  }

  public addRoute(path: string, renderTemplate: () => void): void {
    this.routes.push({ path, renderTemplate });
  }

  public getData(): { [key: string]: string } {
    return this.data;
  }

  // 현재 url 경로 추출
  private _getCurrentURL(): string {
    const path = window.location.pathname;
    return path;
  }

  private _parseQueryParameters(): void {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    params.forEach((value, key) => {
      this.data[key] = value;
    });
  }

  // 동적으로 생성된 routes에서 해당 경로가 존재하는지 확인
  private _matchUrlToRoute(urlSegs: string[]): Route | undefined {
    try {
      const matchedRoute = this.routes.find((route) => {
        const routePathSegments = route.path.split('/').filter(Boolean);
        const currentPathSegments = urlSegs.filter(Boolean);

        if (routePathSegments.length !== currentPathSegments.length) {
          return false;
        }

        return routePathSegments.every((routePathSegment, index) => {
          return (
            routePathSegment.startsWith(':') ||
            routePathSegment === currentPathSegments[index]
          );
        });
      });
      return matchedRoute;
    } catch {
      return undefined;
    }
  }

  // path 추출 및 해당 경로에 대한 컴포넌트 랜더링
  public loadInitialRoute(): void {
    this._parseQueryParameters();
    const pathnameSplit = this._getCurrentURL().split('/');
    const pathSegs = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : [];
    this._loadRoute(...pathSegs);
  }

  private _loadRoute(...urlSegs: string[]): void {
    const matchedRoute = this._matchUrlToRoute(urlSegs);
    if (!matchedRoute) {
      const routeWithNullPath = this.routes.find(
        (route) => route.path === null,
      );
      routeWithNullPath?.renderTemplate(); // null, undefined인 경우 함수 호출하지 않음
    } else {
      matchedRoute.renderTemplate();
    }
  }

  // 해당 경로 history에 push
  public navigateTo(path: string): void {
    const pathnameSplit = this._getCurrentURL();
    if (path !== pathnameSplit) {
      window.history.pushState(null, '', path);
      const popStateEvent = new PopStateEvent('popstate', { state: null });
      dispatchEvent(popStateEvent);
    } else {
      console.log('no render');
    }
  }
}
