import { useState, useRef } from "react";

const Form = (props) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  let onChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
    console.log(formValue);
  };

  return (
    <form
      data-aos={"fade-left"}
      action="mailto:koffokansi@gmail.com"
      className="form"
      method="post"
      enctype="multipart/form-data"
      name="EmailForm"
    >
      <div className="form__element">
        <label htmlFor="name">Your name:</label>
        <input
          id="name"
          value={formValue["Contact-Name"]}
          name="Contact-Name"
          className="form__input"
          type="text"
          required
          onChange={onChange}
        />
      </div>
      <div className="form__element">
        <label htmlFor="email">Your email:</label>
        <input
          id="email"
          name="Contact-Email"
          value={formValue["Contact-Email"]}
          className="form__input"
          type="email"
          required
          onChange={onChange}
        />
      </div>
      <div className="form__element form__span">
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

      <div className="form__element form__span">
        <label htmlFor="body">message:</label>
        <textarea
          id="body"
          rows="13"
          name="Contact-Message"
          className="form__textarea"
          type="text"
          value={formValue["Contact-Message"]}
          required
          onChange={onChange}
        />
      </div>

      <input
        type="submit"
        className="form__element form__span form__button"
        value={isLoading ? "SENDING..." : "submit message"}
      />
    </form>
  );
};

export default Form;
