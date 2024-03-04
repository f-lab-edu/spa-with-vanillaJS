import Component from './Components';

class TestComponent extends Component {
  constructor($element: HTMLElement) {
    super($element);
  }

  setComponent() {
    this.render();
  }

  template(): string {
    return `Test Component Render`;
  }
}

describe('Components 모듈 동작 확인', () => {
  test('컴포넌트 생성 동작 테스트', () => {
    const $element = document.createElement('div');
    const testComponent = new TestComponent($element);
    testComponent.setComponent();

    const sampleElement = $element.querySelector('div');
    expect(sampleElement.textContent).toBe('Test Component Render');
  });
});
