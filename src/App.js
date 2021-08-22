import './App.css';
import {BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Head from './layout/header';
import Sidebar from './layout/sidebar';
import About from './layout/about';
import Skill from "./layout/skill";
import Resume from "./layout/resume";
import Portfolio from './layout/portfolio';
import Contact from "./layout/contact";
import PhotoGallery from "./layout/portfolio-detail/photoGallery";
import WriteUP from './layout/portfolio-detail/write-up';
import {useSelector} from "react-redux";
import { useEffect,useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [state, setstate] = useState(false)
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay:0
    });
    },[]);
  let imageUrl=useSelector(state=>state.imageUrl);
  let button=state?"button--open":"";
  return (
    <BrowserRouter>
      <div className="body">
          <div className="sidebar-opener">
            <div style={{"display":state?"":"none"}} className="sidebar-opener__background" onClick={()=>setstate(!state)}></div>
            <div className="sidebar-opener__button" onClick={()=>setstate(!state)}>
              <div className={button+" button"}></div>
            </div>
          </div>
          <Sidebar show={state}/>
          <Switch>
            <Route exact path="/portfolio">
              <main className="grid-container">
                  <Head/>
                  <About background/>
                  <About/>
                  <Skill background/>
                  <Skill/>
                  <Resume background/>
                  <Resume/>
                  <Portfolio background/>
                  <Portfolio/>
                  <Contact background/>
                  <Contact/>           
              </main>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/portfolio-detail">
              <main className="portfolio-page">
                <PhotoGallery imageUrl={imageUrl}/>
                <WriteUP background/>
                <WriteUP></WriteUP>        
              </main>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>  
  );
  
}


export default App;
