import Component from './Components'
describe('Components 모듈 동작 확인', () => {
    test('컴포넌트 생성 동작 테스트', () => {
        class TestComponent extends Component{
            constructor( $element ) {
                super($element);
                this.render();
            }
            template() {
                return`Test Component Render`
            }
        }
        const $element = document.createElement('div');
        const testComponent = new TestComponent($element);
        testComponent;

        const sampleElement = $element.querySelector('div');
        expect(sampleElement.textContent).toBe('Test Component Render');

    });
});