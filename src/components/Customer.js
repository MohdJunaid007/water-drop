import React, { useState } from "react";
import HeadSection from "./HeadSection/HeadSection";
import WaterDropImageSection from "./WaterDropImageSection/WaterDropImageSection";
import CustomerUserManual from "./Customer/CustomerUserManual/CustomerUserManual";
import CustomerBriefOverviewSection from "./Customer/CustomerBriefOverviewSection/CustomerBriefOverviewSection";
import Footer from "./CustomerFooter/Footer";
import LogoWithLink from "./LogoWithLink/LogoWithLink";

function Customer({data , mailLink , phoneLink}) {
  console.log(data);
  const [content, setContent] = useState({
    data: [
      "Indiwater offers an escape from the hassle of calling or reminding sellers or going all the way to the retail stores to get that can of water.",
    ],
    contentFontSize: "clamp(1.15rem, 0.1832rem + 2.0168vw, 2.2rem)",
    contentWidth: "clamp(21rem, 3.4615rem + 36.5385vw, 40rem)",
    waterDropImage: "/Images/CustomerWaterDrop.png",
    link: "https://play.google.com/store/apps/details?id=com.waterdrop.customer",
  });


  

  return (
    <>
      <HeadSection data={content} />
      <LogoWithLink link={content.link} />
      <CustomerBriefOverviewSection />
      <WaterDropImageSection
        waterDropImage={content.waterDropImage}
        link={content.link}
      />
      <CustomerUserManual />
      <Footer link={content.link} mailLink={mailLink} phoneLink={phoneLink} />
    </>
  );
}

export default Customer;
