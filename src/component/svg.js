import Sprite from "../img/sprite.svg";

let svgImage=props=>{
    let sprite=Sprite+"#"+props.type;
    return (
    <svg className={props.className}>
        <use xlinkHref={sprite}></use>
    </svg>
);
}

export default svgImage;