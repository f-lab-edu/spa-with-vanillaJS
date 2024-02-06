import '../assets/style/components/Card.css'
import Image0 from '../assets/images/Planet.jpeg';
import Image1 from '../assets/images/Architect.jpeg';
import Image2 from '../assets/images/Space.jpeg';
import Image3 from '../assets/images/TENET.jpeg';
import Image4 from '../assets/images/Winter.jpeg';
import Component from '../core/Components.js'

export default class Card extends Component {
    constructor({ $app, id }) {
        super($app);
        this.id = id;
        this.setup();
        this.render()
  }

    setup() {
        this.images = [Image0, Image1, Image2, Image3, Image4];
        this.img = new Image();
        this.img.className = 'thumbnail';
        this.img.src = this.images[this.id];
    }

  template() {
    return `
      <div class="container">
        <a class="contents" href="/about">
          ${this.img.outerHTML}
          <div class="posts">
            <h1 id="title">그 많은 개발 문서는 누가 다 만들었을까</h1>
            <h3 id="contents">토스트 테크니컬 라이터가 하는 일에 이어, 개발자 경험 전반으로 역할을 확장해온 이야기를 공유해요</h3>
            <h4 id="date">2024. 01. 25</h4>
          </div>
        </a>
      </div>
    `;
  }

  setEvent() {
    this.$app.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState(null, '', `/posts/${this.id}`);
      const popStateEvent = new PopStateEvent('popstate', { state: null });
      dispatchEvent(popStateEvent);
    });
  }
    
    
}