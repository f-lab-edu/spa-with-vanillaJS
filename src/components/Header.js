import '../assets/style/components/Header.css'

const Header = ({ app }) => {
	const content = document.createElement('div');
    app.appendChild(content);

    const render = () => {
        content.innerHTML = `
            <header class = "menu">
                <div id="left-logo"> <span>Tost</span>tech</div>
                <div id = "right-menu">
                    <div id="page">디자인</div>
                    <div id="page">개발</div>
                    <div id="page">채용 바로가기</div>
                </div>  
            </header>
    `
    }
    render();
}
export default Header;