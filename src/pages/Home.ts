import Card from '../components/Card'
import Component from '../core/Components'
import styles from '../assets/css/Home.module.css'
import Router from '../router/Router';

const NUMBER_OF_CARD = 5;

interface HomePageProps {
  $element: HTMLElement;
  router: Router; 
}

export default class HomePage extends Component{
    private router: Router; 
    private card: Card;

    constructor({ $element, router }: HomePageProps) {
        $element.innerHTML = '';
        super($element);
        this.router = router;
        this.render()
    }

    template(): string {
        return `
            <h1 class = "${styles.develop}">
                개발
            </h1>
        `
    }

    setTemplate(): void {
        for (let i = 0; i < NUMBER_OF_CARD; i++) {
            this.card = new Card({ $element: this.$element, router: this.router, id: i });
            this.card.setComponent();
        }
    }
}
