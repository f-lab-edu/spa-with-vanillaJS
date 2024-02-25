import App from './App';

const $element: HTMLElement = document.querySelector('.app');
const AppComponent = new App($element);
AppComponent.setComponent();
