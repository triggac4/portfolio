import './App.css';
import Head from './layout/header';
import Sidebar from './layout/sidebar';
import About from './layout/about';
import Skill from "./layout/skill";
import Resume from "./layout/resume";
import Portfolio from './layout/portfolio';
import Contact from "./layout/contact";
function App() {
  return (
    <div className="body">
        <Sidebar/>
        <div className="grid-container">
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
        </div>
    </div>
  );
}

export default App;
