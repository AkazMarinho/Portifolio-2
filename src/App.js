

import './App.css';
import {Header} from './pages/layouts/Header';
import { Footer } from './pages/main/Footer';
import { Main } from './pages/main/Main';
import { RouterApp } from './router/routerApp';

function App() {

    // const [scrollHeight, setScrollHeight] = useState(0);
  
    // const handleScroll = () => {
    //   const currentScrollHeight = window.scrollY;
    //   setScrollHeight(currentScrollHeight);
    // };
  
    // useEffect(() => {
    //   // Adiciona um ouvinte de evento de rolagem quando o componente é montado
    //   window.addEventListener('scroll', handleScroll);
  
    //   // Remove o ouvinte de evento de rolagem quando o componente é desmontado
    //   console.log(window.scrollY);
    //   setScrollHeight(window.scrollY)
    // }, [window.scrollY]);


  return (
    <div >
      <Header/>
      <RouterApp/>

      <Footer/>
    </div>
  );
}

export default App;
