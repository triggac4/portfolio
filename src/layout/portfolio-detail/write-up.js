import { useSelector } from "react-redux";
export default function WriteUP(props){
    let writeUp=useSelector(state=>state.writeUp);
    
    let render=props.background?
    (<section className="writeUp writeUp--background"></section>):
    (
        <section className="writeUp">
            <h2 className="heading__2 section__heading margin-bottom-medium">{writeUp.heading}</h2>
            <p className="writeUp__text">{writeUp.writeUp}</p>
            {
                writeUp.link==null?null:
                <a href={writeUp.link} className="writeUp__link" target="_blank" rel="noreferrer">view project here</a>}
        </section>
    );
    return render;
    
}