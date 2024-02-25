import styles from '../assets/css/Card.module.css'
import Image0 from '../assets/images/Planet.jpeg';
import Image1 from '../assets/images/Architect.jpeg';
import Image2 from '../assets/images/Space.jpeg';
import Image3 from '../assets/images/TENET.jpeg';
import Image4 from '../assets/images/Winter.jpeg';
import Component from '../core/Components';
import Router from '../router/Router';

interface CardProps {
  $element: HTMLElement;
  router: Router;
  id: number;
}

export default class Card extends Component {
    private id: number;
    private router: Router;
    private images: string[];
    private img: HTMLImageElement;

    constructor({ $element, router, id }: CardProps) {
        super($element);
        this.id = id;
        this.router = router;
        
    }
  
  setComponent():void {
    this.setup();
    this.render();
  }

    setup():void {
        this.images = [Image0, Image1, Image2, Image3, Image4];
        this.img = new Image();
        this.img.className = 'thumbnail';
        this.img.className = styles.thumbnail;
        this.img.src = this.images[this.id];
    }

    template():string {
        return `
            <div class="${styles.container}">
                <div class="${styles.contents}">
                    ${this.img.outerHTML}
                    <div class="${styles.posts}">
                        <h1>그 많은 개발 문서는 누가 다 만들었을까</h1>
                        <h3>토스트 테크니컬 라이터가 하는 일에 이어, 개발자 경험 전반으로 역할을 확장해온 이야기를 공유해요</h3>
                        <h4>2024. 01. 25</h4>
                    </div>
                </div>
            </div>
        `;
    }

    setEvent():void {
        this.$element.querySelector('div.' + styles.contents).addEventListener('click', (e) => {
            this.router.navigateTo(`/posts/${this.id}`)
        });
    }
}
