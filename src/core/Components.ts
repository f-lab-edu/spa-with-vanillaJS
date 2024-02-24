export default abstract class Component {
    protected $element: HTMLElement;
    protected $container: HTMLElement;
    protected state: any; // Replace 'any' with the actual type of your state

    constructor ($element: HTMLElement) { 
        this.$container = document.createElement('div');
        $element.appendChild(this.$container);
        this.$element = this.$container;
    }

    // 탬플릿에 대한 추가 컴포넌트 세팅 함수
    protected setComponent(): void { }

    // 탬플릿에 대한 추가 컴포넌트 세팅 함수
    protected setTemplate(): void { }

    // 아벤트 셋업
    protected setup(): void { }
    
    // 랜더링할 template 지정
    protected abstract template(): string;

    // 랜더링 수행
    public render(): void {
        this.$element.innerHTML = this.template();
        this.setTemplate();
        this.setEvent();
    }

    // 랜더링 수행 이후 추가적으로 수행해야 할 작업
    protected setEvent(): void { }
    
    public setState (newState: any): void { // Replace 'any' with the actual type of your state
        this.state = { ...this.state, ...newState };
        this.render();
    }
}
