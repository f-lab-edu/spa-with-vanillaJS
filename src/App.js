import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomePage from './pages/Home.js'

const App = (app) => {
    new Header({ app });
    new HomePage({ app });
    new Footer({ app });
}

export default App;