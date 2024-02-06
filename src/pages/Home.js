import Card from '../components/Card.js'
import Component from '../core/Components.js'
import '../assets/style/pages/Home.css'


export default class HomePage extends Component{
    constructor({ $app }) {
        $app.innerHTML = '';
        super($app);
        this.render()
        for (let i = 0; i < 5; i++) {
            this.card = new Card({ $app: this.$app, id: i });
        }
    }

    template() {
        return `
            <h1 id = "develope">
                개발
            </h1>
        `
    }
}