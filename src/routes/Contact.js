import React from "react";

function Contact() {
  return (
    <main className="main">
      <h1 className="title">Contact</h1>
      <div className="objects-container">
        <form>
          <div className="form__field">
            <label className="form__label" htmlFor="name">
              Name:
            </label>
            <input className="form__input" type="text" name="name" id="name" />
          </div>
          <div className="form__field">
            <label className="form__label" htmlFor="email">
              Email:
            </label>
            <input
              className="form__input"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="form__field">
            <label className="form__label" htmlFor="message">
              Message:
            </label>
            <textarea
              className="form__textarea"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <input className="form__button" type="submit" value="Send" />
        </form>
      </div>
    </main>
  );
}
export default Contact;
