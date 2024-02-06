export default class Component {
    constructor ($app) { 
        this.$app = $app;
        this.$container = document.createElement('div');
        $app.appendChild(this.$container);
        this.$app = this.$container;
    }
    setup() { };
    
    template() {
        return '';
    }

    render() {
    this.$app.innerHTML = this.template();
    this.setEvent();
    }

    setEvent() { }
    
    setState (newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
}
