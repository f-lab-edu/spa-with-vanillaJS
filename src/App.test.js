import routes from './routes.js'


describe('App 페이지 확인', () => {
    test('error 이동 테스트', () => {
         delete window.location;
        window.location = { href: 'http://localhost:9000/posts/nopathexist',pathname: 'http://localhost:9000/posts/nopathexist' };

        let $element = document.createElement('div');
        $element.innerHTML = `
                <header></header>
                <main></main>
                <footer></footer>`
        
        const router = new routes($element.querySelector('main'));
        router;

        const h1Element = $element.querySelector('div h1');
        expect(h1Element.textContent).toBe('잘못된 경로입니다.');
    });
});
