import React from "react";
import "./Footer.css";
import "./../../App.css";
import { Link } from "react-router-dom";

const Footer = ({ link, mailLink, phoneLink }) => {
  const appLink = () => {
    window.open(link, "_blank");
  };

  const mail = () => {
    window.location("mailto:hrishitabagree@gmail.com");
  };
  return (
    <div className="main-footer-span">
      <div className="main-footer">
        <div className="">
          <div className="footer-grid ">
            {/* Get in Tuch */}
            <div className="mx-auto">
              <div className="m-2 mb-7 flex">
                <div className="get-in-touch-element get-in-touch-element-first"></div>
                <div className="get-in-touch-element get-in-touch-element-second flex ">
                  <div className="get-in-touch-element-content self-center text-center md:text-xs lg:text-base m-auto font-medium	">
                    <p className="font-semibold ">Want to create</p>
                    <p className="font-semibold">something together?</p>
                    <h4 className="mt-2 cursor-pointer" onClick={mailLink}>
                      Get in touch <i className="fa-solid fa-arrow-right"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-contact mx-auto">
              <div className="footer-logo md:mt-auto md:mb-auto">
                <Link to={"/"}>
                  <img
                    src={process.env.PUBLIC_URL + `/Images/Main Logo 2.png`}
                  />
                </Link>
              </div>
              <div className="footer-contact-data md:mt-auto md:mb-auto ">
                <div className="flex footer-have-a-question md:mb-12">
                  <button onClick={phoneLink}>
                    <i className="fa-solid fa-phone"></i>
                  </button>
                  <div className="pt-2 pl-3">
                    <div>
                      <h6
                        className=" text-sm "
                        onClick={phoneLink}
                        style={{ cursor: "pointer" }}
                      >
                        Have a Question?
                      </h6>
                    </div>
                    <div>
                      <h2
                        className="text-xl"
                        onClick={phoneLink}
                        style={{ cursor: "pointer" }}
                      >
                        +917003154707
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex footer-contact-us md:mt-12">
                  {/* contact@betatesters.tech */}
                  <button onClick={mailLink}>
                    <i className="fa-solid fa-envelope"></i>
                  </button>
                  <div className="pt-2 pl-3">
                    <div>
                      <h6
                        className="text-sm"
                        onClick={mailLink}
                        style={{ cursor: "pointer" }}
                      >
                        Contact us at
                      </h6>
                    </div>
                    <div>
                      <h2
                        className="text-xl"
                        onClick={mailLink}
                        style={{ cursor: "pointer" }}
                      >
                        contact@betatesters.tech
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className=" footer-social-links  mx-auto md:mt-auto md:mb-auto ">
              <div className="m-1">
                <h4 className="text-lg uppercase md:font-medium">
                  {" "}
                  Social Links
                </h4>
              </div>
              <div>
                <ul className="flex  text-xl my-5  ">
                  <li className="md:m-1 sm:m-2">
                    <button className="facebook inline-flex items-center justify-center w-8 h-8  rounded-full text-sm">
                      <i className="fa fa-brands fa-facebook-f "></i>
                    </button>
                  </li>
                  <li className="md:m-1 sm:m-2">
                    <button className="youtube inline-flex items-center justify-center w-8 h-8   rounded-full text-sm">
                      <i className="fa-brands fa-youtube"></i>
                    </button>
                  </li>
                  <li className=" md:m-1 sm:m-2">
                    <button className="instagram inline-flex items-center justify-center w-8 h-8  rounded-full text-sm">
                      <i className="fa-brands fa-instagram"></i>
                    </button>
                  </li>
                  <li className="md:m-1 sm:m-2">
                    <button className="linkedin inline-flex items-center justify-center w-8 h-8  rounded-full text-sm">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="m-1 cursor-pointer">
                <img
                  src={process.env.PUBLIC_URL + `/Images/GooglePlay.png`}
                  onClick={appLink}
                />
              </div>
            </div>
          </div>
          {/* Copyrignt*/}
          <div className="row copiright text-center">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
