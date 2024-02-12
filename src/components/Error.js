import styles from '../assets/css/Footer.module.css'
import Component from '../core/Components.js'

export default class Error extends Component{
   constructor({ $element,router }) {
        super($element);
        this.render();
   }
    
   template() {
        return `
            <h1>잘못된 경로입니다.</h1>
            <div> 홈으로 돌아가기</div>
        `;
    }

}

