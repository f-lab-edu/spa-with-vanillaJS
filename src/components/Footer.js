import '../assets/style/components/Footer.css'

export default function Header({ app }) {
	this.target = document.createElement('div');
    app.appendChild(this.target);

    const render = () => {
        this.target.innerHTML = `
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
                </div>
            </footer>
    `
    }
    render();
}