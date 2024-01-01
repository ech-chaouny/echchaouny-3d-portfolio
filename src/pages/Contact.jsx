import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [textMessage, setTextMessage] = useState({
    text: "",
    color: "",
  });
  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleFocus = (event) => {};
  const handleBlur = (event) => {};
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name !== "" && form.email !== "" && form.message !== "") {
      setIsLoading(true);
      emailjs
        .send(
          "service_7paqlg3",
          "template_iltvgni",
          {
            from_name: form.name,
            to_name: "Ismael",
            from_email: form.email,
            to_email: "chaouniismail4@gmail.com",
            message: form.message,
          },
          "0q_Iq6Z0DvP-5R7zg"
        )
        .then(
          () => {
            setIsLoading(false);
            showAlert({
              show: true,
              text: "Thank you. I will reply you as soon as possible.",
              type: "success",
            });
            setForm({ name: "", email: "", message: "" });
            hideAlert();
          },
          (error) => {
            setIsLoading(false);
            console.log(error);
            showAlert({
              show: true,
              text: "something went wrong. Please try again",
              type: "danger",
            });
          }
        );
    } else {
      showAlert({
        show: true,
        text: "Don't leave anything empty please?",
        type: "danger",
      });
    }
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-6 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="text-black-500 font-semibold">
            Your Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Jhon doe"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Email
            <input
              type="text"
              name="email"
              className="input"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Enter your message here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
