import { fireEvent } from '@testing-library/dom';
import routes from '../routes.js'
import Card from './Card.js'
import styles from '../assets/css/Card.module.css'

describe('Card 컴포넌트 동작 확인', () => {
    test('컴포넌트 정상 랜더링 테스트', () => {
        let $element = document.createElement('div');
        const CardComponent = new Card({ $element: $element, router: routes, id:0});
        CardComponent;

        const h1Element = $element.querySelector('.posts h1');
        expect(h1Element.textContent).toBe('그 많은 개발 문서는 누가 다 만들었을까');
    });

    test('Card 클릭 url 이동 테스트', () => {
        let $element = document.createElement('div');
        $element.innerHTML = `<main></main>`
    
        const router = routes($element.querySelector('main'));
        const CardComponent = new Card({ $element: $element, router: router, id:0});
        CardComponent;
            
        fireEvent.click($element.querySelector('div.' + styles.contents));
        expect(window.location.href).toContain('/posts/0');
    });
});

