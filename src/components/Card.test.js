import { fireEvent } from '@testing-library/dom';
import Card from './Card.js'; 

describe('페이지 이동 동작 확인', () => {
    test('URL 변경 확인 테스트', () => {
        const app = document.createElement('div');
        app.id = 'app';
        document.body.appendChild(app);
        const route = 0;
        
        Card({ app: document.getElementById('app'), route });
        
        const link = document.querySelector('a.contents');
        fireEvent.click(link);
        expect(window.location.href).toContain(`/#/post`);
        document.body.removeChild(app);
    });

});