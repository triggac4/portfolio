import SvgImage from "../component/svg";
const About=props=>{
    let render=props.background?(<section className="about about--background"></section>): 
    (
        <section id="about" className="about">
            <h2 className="section__heading heading__2 ">about</h2>
            <p data-aos={"fade-left"} className="about__text">Motivated Intern offering outstanding computer science and relating with people abilities. Advanced education and training in Software development with Computer science degree. Eager to apply learned competencies in practical, business setting.</p>
            <h2 data-aos={"fade-left"} className="heading__2 about__bio-info">bio-info</h2>
            <ul data-aos={"fade-left"} className="about__list">
                <li className="about__item"><SvgImage className="about__svg" type="icon-chevron-right"/><span>Birthday: </span> march 11<sup>th</sup></li>
                <li className="about__item"><SvgImage className="about__svg" type="icon-chevron-right"/> <span>phone: </span> +2349039388056</li>
                <li className="about__item"><SvgImage className="about__svg" type="icon-chevron-right"/><span>city: </span> F.C.T abuja </li>
                <li className="about__item"><SvgImage className="about__svg" type="icon-chevron-right"/><span>email: </span> koffokansi@gmail.com </li>
                <li className="about__item"><SvgImage className="about__svg" type="icon-chevron-right"/><span>degree: </span> Bsc </li>
                <li className="about__item"><SvgImage className="about__svg" type="icon-chevron-right"/><span>freelance: </span> available </li>
            </ul>
        </section>
    );
    return render;
}

export default About;