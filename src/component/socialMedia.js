import Svg from "./svg";
let socialMedia=props=>{
    return (
    <div className="socialMedia">
        <a className="socialMedia__link" href="#h"><Svg className="socialMedia__svg" type="icon-twitter" target="_blank" rel="noreferrer"/></a>
        <a className="socialMedia__link" href="https://web.facebook.com/kenechukwu.offokansi" target="_blank" rel="noreferrer"><Svg className="socialMedia__svg" type="icon-facebook"/></a>
        <a className="socialMedia__link" href="https://www.instagram.com/triggac4/" target="_blank" rel="noreferrer"><Svg className="socialMedia__svg" type="icon-instagram"/></a>
        <a className="socialMedia__link" href="https://github.com/triggac4" target="_blank" rel="noreferrer"><Svg className="socialMedia__svg" type="icon-github"/></a>
        <a className="socialMedia__link" href="https://www.linkedin.com/in/kenechukwu-offokansi-0a267a120" target="_blank" rel="noreferrer"><Svg className="socialMedia__svg" type="icon-linkedin"/></a>
    </div>
);
}

export default socialMedia;