import Svg from './svg';
let navigationItem=props=>{
    return (
    <div className="navigationItem">
       <a href="index.html" className="navigationItem__link"><Svg className="navigationItem__svg" type="icon-home"/>Home</a>
       <a href="#about" className="navigationItem__link"><Svg className="navigationItem__svg" type="icon-user"/>about</a>
       <a href="#resume" className="navigationItem__link"><Svg className="navigationItem__svg" type="icon-file-empty"/>resume</a>
       <a href="#portfolio" className="navigationItem__link"><Svg className="navigationItem__svg" type="icon-briefcase"/>portfolio</a>
       <a href="#contact" className="navigationItem__link"><Svg className="navigationItem__svg" type="icon-phone"/>contact</a>
    </div>
);
}

export default navigationItem;