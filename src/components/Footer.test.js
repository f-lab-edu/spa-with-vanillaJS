import Footer from './Footer.js'
import styles from '../assets/css/Footer.module.css'

describe('Footer 컴포넌트 동작 확인', () => {
    test('컴포넌트 정상 랜더링 테스트', () => {
        let $element = document.createElement('div');
        const FooterComponent = new Footer({ $element: $element });
        FooterComponent;

        const advElement = $element.querySelector('div.' + styles.menuTitle);
        expect(advElement.textContent).toBe('토스트테크');
    });
});
