import routes from '../routes.js'
import Header from './Header.js'
import styles from '../assets/css/Card.module.css'

describe('Header 컴포넌트 동작 확인', () => {
    test('컴포넌트 정상 랜더링 테스트', () => {
        let $element = document.createElement('div');
        const HeaderComponent = new Header({ $element: $element, router: routes});
        HeaderComponent;

        const logoElement = $element.querySelector('div.'+styles.rightMenu);
        expect(logoElement.textContent).toContain('디자인');
    });
});
