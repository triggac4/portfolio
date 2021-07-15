import Form from "../component/form"

const contact= props=>{
    let render=props.background?(<section className="contact contact--background"></section>): 
    (
        <section id="contact" className='contact'>
            <h2 className="heading__2 section__heading margin-bottom-medium">Contact</h2>
            <Form/>
        </section>
    );
    return render;
};
export default contact;