import Card from '../components/Card.js'
import Component from '../core/Components.js'
import styles from './Home.module.css'


export default class HomePage extends Component{
    constructor({ $app }) {
        $app.innerHTML = '';
        super($app);
        this.render()
    }

    template() {
        return `
            <h1 class = "${styles.develop}">
                개발
            </h1>
        `
    }

    setEvent() {
        for (let i = 0; i < 5; i++) {
            this.card = new Card({ $app: this.$app, id: i });
        }
    }
}