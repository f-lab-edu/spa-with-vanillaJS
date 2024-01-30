import '../assets/style/components/Header.css'

const Header = ({ app }) => {
	const content = document.createElement('div');
    app.appendChild(content);

    const render = () => {
        content.innerHTML = `
            <header class = "menu">
                <a href = "/" id="left-logo"> <span>Tost</span>tech</a>
                <div id = "right-menu">
                    <div id="page">디자인</div>
                    <div id="page">개발</div>
                    <div id="page">채용 바로가기</div>
                </div>  
            </header>
        `
        content.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            window.history.pushState(null, '', '/');
            const popStateEvent = new PopStateEvent('popstate', { state: null });
            dispatchEvent(popStateEvent);
        });
    }
    render();
}
export default Header;