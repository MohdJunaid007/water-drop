import React from "react";
import "./ContactUs.css";
import "./../../App.css";
import emailjs from "emailjs-com";

function ContactUs() {
  let sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xpgow03",
        "template_45w5z8c",
        e.target,
        "mdLj78ipiagRFYann"
      )
      .then(
        (result) => {
          alert("Press OK to Confirm");
          window.location.reload(true);
          //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)

          //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          alert("Something went wrong");
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Contact-us-main-span">
      <div className="Contact-us-main m-2 mt-6 mb-12">
        <div className="Contact-us-title my-4">
          <p className="uppercase">Contact Us</p>
        </div>
        <div className="Contact-us-sub-title text-5xl text-center font-semibold my-5 m-auto">
          OUR TEAMS ARE HERE TO HELP
        </div>

        <div className="Contact-us-content mx-12">
          <div className="Contact-us-img">
            <img
              src={process.env.PUBLIC_URL + `/Images/contact.png`}
              alt="contact page"
            />
          </div>

          <div className="Contact-us-form pt-16 pb-32 ">
            <div className="style-box"></div>
            <form method="post" onSubmit={sendEmail}>
              <label className="form-group mt-5 mb-5">
                <input
                  type="text"
                  className="form-control"
                  name="from_name"
                  id="name"
                  placeholder="Your Name"
                  autoComplete="off"
                  required
                />
              </label>
              <label className="form-group mt-5 mb-5">
                <input
                  type="email"
                  className="form-control"
                  name="from_email"
                  id="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  required
                />
              </label>
              <label className="form-group mt-5 mb-5">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  autoComplete="off"
                />
              </label>
              {/* Change the spacing of message */}
              <label className="form-group mt-12 mb-12">
                <textarea
                  cols={3}
                  rows={3}
                  placeholder="Message"
                  autoComplete="off"
                  name="message"
                ></textarea>
              </label>
              <label className="form-group form-submit-button">
                <button
                  className="submit-button px-5 py-3"
                  type="submit"
                  value=""
                >
                  Send Message
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
