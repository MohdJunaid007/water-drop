import React, { useState } from "react";
import ImageSlider from "./HomePage/Imageslider/ImageSlider";
import HandIndiwater from "./HomePage/HandIndiwater/HandIndiwater";
import Testimonials from "./HomePage/Testimonials/Testimonials";
import LogoLink from "./HomePage/LogoLink/logoLink";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";

function Home({mailLink , phoneLink}) {
  const [content, setContent] = useState({
    link: "https://play.google.com/store/apps/details?id=com.waterdrop.customer",
  });

  return (
    <>
      <ImageSlider />
      <HandIndiwater link={content.link} />
      <LogoLink link={content.link} />
      <Testimonials />
      <ContactUs />
      <Footer link={content.link} mailLink={mailLink} phoneLink={phoneLink} />
    </>
  );
}

export default Home;
