import '../assets/style/pages/Post.css'
import Image0 from '../assets/images/Planet.jpeg';
import Image1 from '../assets/images/Architect.jpeg';
import Image2 from '../assets/images/Space.jpeg';
import Image3 from '../assets/images/TENET.jpeg';
import Image4 from '../assets/images/Winter.jpeg';

const Post = ({ app, route }) => {
    const images = [Image0,Image1,Image2,Image3,Image4]
    const content = document.createElement('div')
    content.className = 'post-content';

    app.appendChild(content);

    const img = document.createElement('img');
    img.className = "title-image"
    img.src = images[route];

    const render = () => {
        content.innerHTML = `
            ${img.outerHTML}
            <h1 id = "post-title">
                이것은 ${route}번째 포스트 페이지입니다.
            </h1>
        `
    }
    render();
}

export default Post;