import routes from './routes';

describe('App 페이지 확인', () => {
  test('error 이동 테스트', () => {
    delete window.location;
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://localhost:9000/posts/nopathexist',
        pathname: 'http://localhost:9000/posts/nopathexist',
      },
    });

    const $element = document.createElement('div');
    $element.innerHTML = `
                <header></header>
                <main></main>
                <footer></footer>`;

    const router = routes($element.querySelector('main'));
    router;

    const h1Element = $element.querySelector('div h1');
    expect(h1Element.textContent).toBe('잘못된 경로입니다.');
  });
});
