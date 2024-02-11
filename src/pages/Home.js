import Card from '../components/Card.js'
import Component from '../core/Components.js'
import styles from '../assets/css/Home.module.css'

const NUMBER_OF_CARD = 5;

export default class HomePage extends Component{
    constructor({ $element }) {
        $element.innerHTML = '';
        super($element);
        this.render()
    }

    template() {
        return `
            <h1 class = "${styles.develop}">
                개발
            </h1>
        `
    }

    setTemplate() {
        for (let i = 0; i < NUMBER_OF_CARD; i++) {
            this.card = new Card({ $element: this.$element, id: i });
        }
    }
}