export default class Component {
    // 생성자 -> 할당된 $app에 컴포넌트를 삽입할 div 생성
    constructor ($element) { 
        this.$container = document.createElement('div');
        $element.appendChild(this.$container);
        this.$element = this.$container;
    }

    // 탬플릿에 대한 추가 컴포넌트 세팅 함수
    setTemplate() { }

    // 아벤트 셋업
    setup() { }
    
    // 랜더링할 template 지정
    template() {
        return '';
    }

    // 랜더링 수행
    render() {
        this.$element.innerHTML = this.template();
        this.setTemplate();
        this.setEvent();
    }

    // 랜더링 수행 이후 추가적으로 수행해야 할 작업
    setEvent() { }
    
    setState (newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
}
