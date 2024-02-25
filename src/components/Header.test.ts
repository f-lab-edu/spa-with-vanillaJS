import routes from '../routes'
import Header from './Header'

import styles from '../assets/css/Card.module.css'

describe('Header 컴포넌트 동작 확인', () => {
    test('컴포넌트 정상 랜더링 테스트', () => {
        const $element = document.createElement('div');
        $element.innerHTML = `<main></main>`
    
        const router = routes($element.querySelector('main'));
        const HeaderComponent = new Header({ $element: $element, router: router});
        HeaderComponent.setComponent();

        const logoElement = $element.querySelector('div.'+styles.rightMenu);
        expect(logoElement.textContent).toContain('디자인');
    });
});
