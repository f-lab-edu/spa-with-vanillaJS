import Card from '../components/Card'
import '../assets/style/pages/Home.css'

const HomePage = ({ app }) => {
    const content = document.createElement('div')
    content.className = 'content';

    app.appendChild(content);
    const render = () => {
        content.innerHTML = `
            <h1 id = "develope">
                개발
            </h1>
        `
    }
    render();
    for(let i = 0; i < 5; i++) {
        const card = new Card({ app:content });
    }
}

export default HomePage;