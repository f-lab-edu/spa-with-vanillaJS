import '../assets/style/components/Card.css'
import planetImage from '../assets/images/Planet.jpeg';

const Card = ({ app }) => {
    const content = document.createElement('div');
    content.className = "container"
    app.appendChild(content);

    const img = document.createElement('img');
    img.className = "thumbnail"
    img.src = planetImage;

    const render = () => {
        content.innerHTML = `
            <a class = "contents" href="#">
                ${img.outerHTML}
                <div class = "posts">
                    <h1 id="title">그 많은 개발 문서는 누가 다 만들었을까</h1>
                    <h3 id="contents">토스트 테크니컬 라이터가 하는 일에 이어, 개발자 경험 전반으로 역할을 확장해온 이야기를 공유해요</h3>
                    <h4 id="date">2024. 01. 25</h4>
                </div>
                
            </a>
    `
    }
    render();
}
export default Card;