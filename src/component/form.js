

const Form=props=>{
    return(
        <form data-aos={"fade-left"} action="mailto:koffokansi@gmail.com?subject=contact_form_from_portfolio" className="form" method="post" name="contactForm" encType="multipart/form-data”">
            <div className="form__element">
                <label htmlFor="name">
                    Your name:
                </label>       
                <input id="name" className="form__input" type="text" required/>
            </div>
            <div className="form__element">
                <label htmlFor="email">
                    Your email:
                </label>       
                <input id="email" className="form__input" type="email" required/>
            </div>
            <div className="form__element form__span">
                <label htmlFor="title">
                    title:
                </label>       
                <input id="title" className="form__input" type="text" required/>
            </div>
            
            <div className="form__element form__span">
                <label htmlFor="body">
                    message:
                </label>       
                <textarea id="body" rows="13" className="form__textarea" type="text" required/>
            </div>
            
            <button className="form__element form__span form__button">Submit message</button>
        </form>
    );
};

export default Form;