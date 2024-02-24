import App from './App'

const $element = document.querySelector('.app') as HTMLElement
const AppComponent = new App($element);
AppComponent.setComponent();