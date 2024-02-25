import styles from '../assets/css/Footer.module.css';
import Component from '../core/Components';

interface FooterProps {
  $element: HTMLElement;
}

export default class Footer extends Component {
  constructor({ $element }: FooterProps) {
    super($element);
  }
  setComponent(): void {
    this.render()
  }
  template(): string {
    return `
            <footer class = "${styles.foot}">
                <div class = "${styles.adv}"> 토스트팀이 만드는 <br/> 수많은 혁신의 순간들</div>
                <div class = "${styles.services}">
                    <div class = "${styles.menu}">
                        <div class = "${styles.menuTitle}">토스트테크</div>
                        <div> 의견 보내기 </div>
                    </div>
                    <div class = "${styles.menu}">
                        <div class = "${styles.menuTitle}">토스트</div>
                        <div>홈페이지</div>
                        <div>소개</div>
                    </div>
                    <div class = "${styles.menu}">
                        <div class = "${styles.menuTitle}">고객센터</div>
                        <div>전화</div>
                        <div>이메일</div>
                    </div>
                </div>
            </footer>
        `;
  }
}
