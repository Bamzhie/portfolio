import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  console.log(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="bg-[#CCCC99] w-full h-auto dark:bg-black dark:text-white p-4"
    >
      <div>
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold">CONTACT</h1>
          <div className="flex items-center justify-center">
            <div className="w-10 rounded-full mt-6 mb-4 h-1 bg-black"></div>
          </div>
          <p className=" mt-4 text-lg">CONTACT ME</p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact__form-container dark:bg-black "
        >
          <div className="contact__form-field ">
            <label htmlFor="name" className="contact__form-label ">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="contact__form-input dark:bg-slate-600"
            />
          </div>
          <div className="contact__form-field">
            <label htmlFor="name" className="contact__form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="contact__form-input dark:bg-slate-600"
            />
          </div>
          <div className="contact__form-field">
            <label htmlFor="message" className="contact__form-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="contact__form-input dark:bg-slate-600"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button className="contact__btn text-white font-bold bg-blue-500 rounded-md ">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
