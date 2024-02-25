import styles from '../assets/css/Post.module.css';
import Component from '../core/Components';
import Image0 from '../assets/images/Planet.jpeg';
import Image1 from '../assets/images/Architect.jpeg';
import Image2 from '../assets/images/Space.jpeg';
import Image3 from '../assets/images/TENET.jpeg';
import Image4 from '../assets/images/Winter.jpeg';
import Router from '../router/Router';

interface PostProps {
  $element: HTMLElement;
  router: Router;
}

interface PostState {
  img: string;
  title: string;
}

export default class Post extends Component {
  private router: Router;
  private id: string;
  private images: string[];
  private pageState: PostState;

  constructor({ $element, router }: PostProps) {
    $element.innerHTML = '';
    super($element);
    this.router = router;
    this.id = window.location.pathname.split('/').pop();
    this.images = [Image0, Image1, Image2, Image3, Image4];
  }
  setComponent(): void {
    this.setup();
    this.render();
  }
  setup(): void {
    this.pageState = {
      img: this.images[Number(this.id)],
      title: `이것은 ${this.id}번째 포스트 페이지입니다.`,
    };
  }

  template(): string {
    return `
            <div class = "${styles.postContent}">
                <img class = "${styles.titleImage}" src="${this.pageState.img}" />
                <div class = "${styles.datas}"></div>
                <h1 class = "${styles.postTitle}">${this.pageState.title}</h1>
                <p class = "${styles.postSubContent}">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br/>
                Voluptates rerum possimus officiis fugit nisi nostrum odit, doloribus provident amet earum voluptatum cupiditate necessitatibus ea eligendi tenetur unde? Ullam, totam similique!
                Ea illum at voluptatum, optio animi recusandae laboriosam. Soluta quibusdam totam nulla perspiciatis quisquam. Soluta autem iste placeat error est corporis similique quisquam animi! Adipisci tempore laborum esse placeat dolor!
                Vel temporibus perspiciatis libero eligendi aspernatur laboriosam. 
            </p>
            <p class = "${styles.postSubContent}">
                Ullam quo beatae nobis voluptates dignissimos harum deleniti. Mollitia similique numquam modi odit ipsam inventore minima beatae doloribus facere vero, vel ut quo!
                Consequuntur consectetur aperiam sequi amet corrupti ut fuga quidem eligendi non nam odio aspernatur qui suscipit illo, accusantium assumenda tempora, sed, sapiente fugit repellendus. Consequatur saepe unde laudantium voluptatum nostrum.
                Ipsum velit ducimus excepturi quaerat autem harum voluptatem reprehenderit quia voluptas officiis aperiam porro obcaecati vitae distinctio possimus, necessitatibus at quod accusamus laudantium quos repellat recusandae fuga! Odit, minus dolorem.
                Soluta ullam optio rem laudantium nostrum, ipsa reprehenderit, asperiores animi, repudiandae non minus nesciunt at ea id nulla. Officia, necessitatibus fugit! Error veniam delectus dignissimos neque culpa ipsum voluptate sapiente.
                Blanditiis placeat quod hic sint quam, cum qui reiciendis quo eum optio tempora debitis ab. Nesciunt facilis, reiciendis corporis sit sunt ipsum voluptate, ipsa, ducimus mollitia placeat minima neque optio!
                Explicabo dignissimos quos doloribus corporis sapiente deserunt sed exercitationem, voluptatibus perspiciatis optio assumenda officia porro! Aliquam, dicta sequi. Voluptates fugit in odio, atque rem iure laboriosam ad! Sed, consectetur provident!
                Fugit illum molestias repellendus perspiciatis modi id officia sint soluta recusandae nemo excepturi iusto saepe exercitationem, minima ut eligendi quo. Nemo, vitae repellat? Perspiciatis, recusandae necessitatibus corporis quo provident officia!
                Officiis atque consectetur id rerum aperiam molestiae? Porro, quaerat error iste nesciunt numquam praesentium similique veniam illo amet laborum dolor esse omnis, at eaque. Est quaerat repudiandae similique beatae suscipit!
                Quasi, eum placeat aliquam animi vel nesciunt possimus ad facere officia facilis quibusdam cupiditate asperiores ducimus laborum aspernatur enim. A quas harum dolor necessitatibus sit nemo maiores temporibus eaque cupiditate.
                Neque, minus natus, maiores voluptatum sequi vel iste quo earum, perspiciatis delectus mollitia aut optio. Quam, ipsa deleniti, illum totam, minus aperiam autem nobis possimus mollitia incidunt ea sunt fugit.
                Sint quos nemo, quis quia placeat quaerat accusantium odio aspernatur dolore deleniti laborum nesciunt modi natus veritatis beatae distinctio animi atque ex! Ipsum dignissimos rerum ratione? Amet nobis quis nam?
                Necessitatibus laborum, aut veniam quo corporis ratione, nisi excepturi alias accusantium blanditiis officiis sit nihil velit, quam ipsam ea aliquam nulla sapiente exercitationem odit quaerat! 
            </p>
            <p class = "${styles.postSubContent}">
                Adipisci quisquam iure laborum voluptates?
                Quos vero itaque iure, corporis sunt, fugiat reprehenderit quam, possimus repellendus consectetur ad hic quae libero officiis ab sit architecto cum tempore modi optio iusto accusantium! Cupiditate, nihil aliquam? Eligendi!
                Modi amet aliquam obcaecati est numquam vel blanditiis molestias architecto unde molestiae, minus laborum aut sunt cum, a debitis dignissimos ipsa sequi nulla odit pariatur! Pariatur sint ad incidunt magnam.
                Modi, odit aut voluptas aliquam perspiciatis molestiae quod neque. Distinctio maxime magni praesentium quibusdam modi amet non. Molestias error, voluptatibus doloribus totam ipsam, maiores reiciendis aspernatur cumque architecto beatae nihil?
                Ullam in natus optio quia quasi, beatae odio debitis eum, ducimus, dolorum culpa hic. Debitis amet quas perspiciatis placeat maxime earum tempore aut facere inventore repudiandae, iusto ipsum ratione. Corrupti?
                Dolore molestias consequuntur obcaecati necessitatibus alias distinctio inventore maxime officia sequi, aut magnam tempora laborum. Et fugit nesciunt beatae. Voluptatum ut, doloremque quibusdam quae delectus sint amet soluta autem suscipit!
                Aperiam deleniti molestiae hic porro! Harum voluptatem eligendi odio voluptate quis, earum quidem nihil, ullam maiores sed optio deserunt praesentium ipsam minima? Earum harum eveniet ut delectus qui tenetur esse?
            </p>
            </div>
        `;
  }

  setEvent(): void {
    const datasDiv = this.$element.querySelector('div.' + styles.datas);
    if (datasDiv) {
      let html = '';
      for (let key in this.router.data) {
        let value = this.router.data[key];
        html += `<p>${key}: ${value}</p>`;
      }
      datasDiv.innerHTML = html;
    }
  }
}
