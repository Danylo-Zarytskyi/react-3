import Header from './components/header/index.js';
import TopCont from './components/container/topContainer/index.js';
import BotCont from './components/container/botContainer/index.js';
import TopFooter from './components/footer/topFooter/index.js';
import Input from './components/footer/input/index.js';
import Result from './components/footer/result/index.js';
import Quesitons from './components/footer/questions/index.js';
import Footer from './components/footer/footer/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <TopCont/>
        <BotCont/>
        <TopFooter/>
        <Input/>
        <Result/>
        <Quesitons/>
        <Footer/>
    </div>
  );
}

export default App;
