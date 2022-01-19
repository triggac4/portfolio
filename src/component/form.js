import { useState, useRef } from "react";

const Form = (props) => {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        subject: "",
        body: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const shouldSendRequest = useRef(true);
    let onChange = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value });
        console.log(formValue);
    };

    async function onSubmit(event) {
        event.preventDefault();
        let containsEmpty = false;
        Object.keys(formValue).forEach((e) => {
            if (!formValue[e]) {
                containsEmpty = true;
            }
        });
        if (!containsEmpty && shouldSendRequest.current) {
            shouldSendRequest.current = false;
            setIsLoading(true);
            try {
                await fetch(
                    "https://mailer-3055.herokuapp.com/api/v1/contact",
                    {
                        method: "post",
                        body: JSON.stringify(formValue),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                setFormValue({
                    name: "",
                    email: "",
                    subject: "",
                    body: "",
                });
            } catch (e) {
                console.log(e);
            } finally {
                shouldSendRequest.current = true;
                setIsLoading(false);
            }
        }
    }
    return (
        <form
            action="http://localhost:3000/api/v1/contact"
            className="form"
            method="post"
        >
            <div data-aos={"fade-left"} className="form__element">
                <label htmlFor="name">Your name:</label>
                <input
                    id="name"
                    value={formValue.name}
                    name="name"
                    className="form__input"
                    type="text"
                    required
                    onChange={onChange}
                />
            </div>
            <div data-aos={"fade-left"} className="form__element">
                <label htmlFor="email">Your email:</label>
                <input
                    id="email"
                    name="email"
                    value={formValue.email}
                    className="form__input"
                    type="email"
                    required
                    onChange={onChange}
                />
            </div>
            <div data-aos={"fade-left"} className="form__element form__span">
                <label htmlFor="title">title:</label>
                <input
                    id="title"
                    name="subject"
                    className="form__input"
                    type="text"
                    value={formValue.subject}
                    required
                    onChange={onChange}
                />
            </div>

            <div data-aos={"fade-left"} className="form__element form__span">
                <label htmlFor="body">message:</label>
                <textarea
                    id="body"
                    rows="13"
                    name="body"
                    className="form__textarea"
                    type="text"
                    value={formValue.body}
                    required
                    onChange={onChange}
                />
            </div>

            <input
                data-aos={"fade-left"}
                type="button"
                className="form__element form__span form__button"
                value={isLoading ? "SENDING..." : "submit message"}
                onClick={onSubmit}
            />
        </form>
    );
};

export default Form;
