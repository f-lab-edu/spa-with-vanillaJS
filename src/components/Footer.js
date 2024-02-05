// import '../assets/style/components/Footer.css'

// export default function Footer({ $app }) {
//     console.log("Footer", $app)
//     $app.innerHTML = '';
//     const content = document.createElement('footer')
//     content.className = 'foot';
//     $app.appendChild(content);

//     const render = () => {
//         content.innerHTML = `
//                 <div id="adv">토스트팀이 만드는 <br/> 수많은 혁신의 순간들</div>
//                     <div class = "services">
//                         <div id="menu">
//                             <div id = "menu-title">토스트테크</div>
//                             <div>의견 보내기</div>
//                         </div>
//                         <div id="menu">
//                             <div id="menu-title">토스트</div>
//                             <div>홈페이지</div>
//                             <div>소개</div>
//                         </div>
//                         <div id="menu">
//                             <div id="menu-title">고객센터</div>
//                             <div>전화</div>
//                             <div>이메일</div>
//                         </div>
//                     </div>
//                 </div>
//     `
//     }
//     render();
// }

import '../assets/style/components/Footer.css'
import Component from '../core/Components.js'

class Footer extends Component{
   constructor({ $app }) {
        super($app);
        this.setup();
    this.render();
   }
   template() {
        return `
            <footer class = "foot">
                <div id="adv">토스트팀이 만드는 <br/> 수많은 혁신의 순간들</div>
                <div class = "services">
                    <div id="menu">
                        <div id = "menu-title">토스트테크</div>
                        <div>의견 보내기</div>
                    </div>
                    <div id="menu">
                        <div id="menu-title">토스트</div>
                        <div>홈페이지</div>
                        <div>소개</div>
                    </div>
                    <div id="menu">
                        <div id="menu-title">고객센터</div>
                        <div>전화</div>
                        <div>이메일</div>
                    </div>
                </div>
            </footer>
        `;
    }

    setEvent() {
        const logoBtn = document.getElementById('left-logo');
        logoBtn.addEventListener('click', (e) => {
            const currentPath = window.location.pathname;
            if (currentPath !== "/") {
                window.history.pushState(null, '', '/');
                const popStateEvent = new PopStateEvent('popstate', { state: null });
                dispatchEvent(popStateEvent);
            }
        });
    }
}

export default Footer;
