export default class Component {
  constructor ($app) { 
    this.$app = $app;
    
  }
    setup () {};
    template() {
        return '';
    }
    render() {
    this.$app.innerHTML = this.template();
    this.setEvent();
    }
  setEvent () {}
  setState (newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
