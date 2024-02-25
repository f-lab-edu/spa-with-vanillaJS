
import Router from './Router'


describe('Router 모듈 동작 확인', () => {
    test('라우터에 따른 랜더 함수 실행 테스트', () => {
        console.log = jest.fn();
        const router = new Router;
        router.addRoute('', () => console.log("initial route"));
        router.addRoute('/', () => console.log("initial route"));
        router.loadInitialRoute();
        
        delete window.location;
        (window as any).location = { pathname: '/' };

        expect(console.log).toHaveBeenCalledWith('initial route');
    });

    test('에러 페이지 라우팅 테스트', () => {
        (window as any).location = { href:'http://localhost:9000/' ,pathname: 'http://localhost:9000/' };
        console.log = jest.fn();
        const router = new Router;
        router.addRoute('', () => console.log("initial route"));
        router.addRoute('/', () => console.log("initial route"));
        router.addRoute(null, () =>  console.log("Error Page Render"));
        router.loadInitialRoute();
        
        delete window.location;
        (window as any).location = { href:'http://localhost:9000/noPageExist' ,pathname: 'http://localhost:9000/noPageExist' };

        expect(console.log).toHaveBeenCalledWith('Error Page Render');
    });

    test('쿼리 스트링 테스트', () => {
        (window as any).location = { href:'http://localhost:9000/test?id=0&name=apple' ,pathname: 'http://localhost:9000/test?id=0&name=apple' };
  
        const router = new Router;
        router.addRoute('', () => console.log("initial route"));
        router.addRoute('/', () => console.log("initial route"));
        router.addRoute('/test', () => console.log("test route"));
        router.addRoute(null, () =>  console.log("Error Page Render"));
        router.loadInitialRoute();

        expect(router.getData().name).toBe('apple');
    });

});