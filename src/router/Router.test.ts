import Router from './Router';

describe('Router 모듈 동작 확인', () => {
  test('라우터에 따른 랜더 함수 실행 테스트', () => {
    const { location } = window; // window 저장
    console.log = jest.fn();
    const router = new Router();
    router.addRoute('', () => console.log('initial route'));
    router.addRoute('/', () => console.log('initial route'));
    router.loadInitialRoute();

    delete window.location;
    Object.defineProperty(window, 'location', {
      value: {
        href: '/',
        pathname: '/',
      },
      writable: true, // 재정의 가능하게 설정
    });

    expect(console.log).toHaveBeenCalledWith('initial route');
    window.location = location; // 재정의되었던 window 복구
  });

  test('에러 페이지 라우팅 테스트', () => {
    const { location } = window;
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://localhost:9000/',
        pathname: 'http://localhost:9000/',
      },
      writable: true, // 재정의 가능하게 설정
    });

    console.log = jest.fn();
    const router = new Router();
    router.addRoute('', () => console.log('initial route'));
    router.addRoute('/', () => console.log('initial route'));
    router.addRoute(null, () => console.log('Error Page Render'));
    router.loadInitialRoute();

    delete window.location;
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://localhost:9000/noPageExist',
        pathname: 'http://localhost:9000/noPageExist',
      },
      writable: true, // 재정의 가능하게 설정
    });

    expect(console.log).toHaveBeenCalledWith('Error Page Render');
    window.location = location;
  });

  test('쿼리 스트링 테스트', () => {
    const { location } = window;
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://localhost:9000/test?id=0&name=apple',
        pathname: 'http://localhost:9000/test?id=0&name=apple',
      },
      writable: true, // 재정의 가능하게 설정
    });

    const router = new Router();
    router.addRoute('', () => console.log('initial route'));
    router.addRoute('/', () => console.log('initial route'));
    router.addRoute('/test', () => console.log('test route'));
    router.addRoute(null, () => console.log('Error Page Render'));
    router.loadInitialRoute();

    expect(router.getData().name).toBe('apple');
    window.location = location;
  });
});
