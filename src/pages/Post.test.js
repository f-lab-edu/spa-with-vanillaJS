import { fireEvent } from '@testing-library/dom';
import Post from './Post.js';
import routes from '../routes.js'
import styles from '../assets/css/Card.module.css'

describe('Post 페이지 이동 동작 확인', () => {
    test('컴포넌트 정상 랜더링 테스트', () => {
        let $element = document.createElement('div');

        delete window.location;
        window.location = { pathname: '/posts/0' };

        const PostComponent = new Post({ $element: $element, router: routes});
        PostComponent;

        expect($element.querySelector('.postTitle').textContent).toBe('이것은 0번째 포스트 페이지입니다.');
    });

    

    test('쿼리스트링 테스트', () => {
        let $element = document.createElement('div');
        $element.innerHTML = `
                <header></header>
                <main></main>
                <footer></footer>`
        
        delete window.location;
        window.location = { href: 'http://localhost:9000/posts/0?id=0&name=apple',pathname: 'http://localhost:9000/posts/0?id=0&name=apple' };
        
        const router = new routes($element.querySelector('main'));
        const PostComponent = new Post({ $element: $element, router: router});
        PostComponent;

        expect($element.querySelector('.datas p').textContent).toBe('id: 0');
    });
});