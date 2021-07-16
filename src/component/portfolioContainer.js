import {Link} from "react-router-dom";
  
const portfolioContainer=props=>{
    let isWeb=props.className==="portfolio__web";
    let portfolioExtra=isWeb?
        (<div className="portfolio__extra">
            <Link to="/portfolio-detail">
                <a href="#portfolio" className="portfolio__extra--1">more</a>
            </Link>
            <a href="#port" className="portfolio__extra--2">link</a>
        </div>):
        (<div className="portfolio__extra">
           <Link to="/portfolio-detail">
                <a href="#portfolio" className="portfolio__extra--1" style={{width:"100%"}}>more</a>
           </Link> 
        </div>);

    let style={display:"block"};
    if(props.display.all){
        style={display:"block"};        
    }
    else if(props.display.mobile){
        if(isWeb){
            style={display:"none"};
        }else{
            style={display:"block"};
        }
    }else if(props.display.web){
        if(isWeb){
            style={display:"block"};
        }
        else{
            style={display:"none"};
        }
    }



    return (
        <figure className={props.className} style={style}>
            <img className="portfolio__img" src={props.src} alt={props.alt}/>
            {portfolioExtra}
       </figure>
    );
}

export default portfolioContainer;