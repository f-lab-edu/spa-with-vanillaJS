import '../assets/style/components/Footer.css'
export default function Header({ app }) {
	this.target = document.createElement('div');
    app.appendChild(this.target);

    const render = () => {
        this.target.innerHTML = `
            <footer class = "foot">
                <div id="adv">토스트팀이 만드는 수많은 혁신의 순간들</div>
                <div>
                    <div id="menu">토스테크</div>
                    <div id="menu">토스</div>
                    <div id="menu">고객센터</div></div>
                </div>
            </footer>
    `
    }
    render();
}