import '../assets/style/components/Card.css'
import Image0 from '../assets/images/Planet.jpeg';
import Image1 from '../assets/images/Architect.jpeg';
import Image2 from '../assets/images/Space.jpeg';
import Image3 from '../assets/images/TENET.jpeg';
import Image4 from '../assets/images/Winter.jpeg';

const Card = ({ app, route }) => {
    const images = [Image0,Image1,Image2,Image3,Image4]
    const content = document.createElement('div');
    content.className = "container"
    app.appendChild(content);

    const img = document.createElement('img');
    img.className = "thumbnail"
    img.src = images[route];

    const render = () => {
        content.innerHTML = `
            <a class = "contents" href="#/post/${route}">
                ${img.outerHTML}
                <div class = "posts">
                    <h1 id="title">그 많은 개발 문서는 누가 다 만들었을까</h1>
                    <h3 id="contents">토스트 테크니컬 라이터가 하는 일에 이어, 개발자 경험 전반으로 역할을 확장해온 이야기를 공유해요</h3>
                    <h4 id="date">2024. 01. 25</h4>
                </div>
                
            </a>
    `
        content.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = `/post/${route}`;
        });
    }
    
    render();
}

export default Card;
