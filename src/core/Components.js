export default class Component {
    // 생성자 -> 할당된 $app에 컴포넌트를 삽입할 div 생성
    constructor ($app) { 
        this.$app = $app;
        this.$container = document.createElement('div');
        $app.appendChild(this.$container);
        this.$app = this.$container;
    }

    // 아벤트 셋업
    setup() { };
    
    // 랜더링할 template 지정
    template() {
        return '';
    }

    // 랜더링 수행
    render() {
    this.$app.innerHTML = this.template();
    this.setEvent();
    }

    // 랜더링 수행 이후 추가적으로 수행해야 할 작업
    setEvent() { }
    
    setState (newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
}
