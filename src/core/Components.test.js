import Component from './Components.js'
describe('Components 모듈 동작 확인', () => {
    test('컴포넌트 정상 랜더링 테스트', () => {
        class TestComponent extends Component{
            constructor( $element ) {
                super($element);
                this.render();
            }
            template() {
                return`Test Component Render`
            }
        }
        let $element = document.createElement('div');
        const testComponent = new TestComponent($element);
        testComponent;

        const sampleElement = $element.querySelector('div');
        expect(sampleElement.textContent).toBe('Test Component Render');

    });
});