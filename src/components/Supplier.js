import React, { useState } from "react";
import HeadSection from "./HeadSection/HeadSection";
import WaterDropImageSection from "./WaterDropImageSection/WaterDropImageSection";
import SupplierBriefOverviewSection from "./Supplier/SupplierBriefOverviewSection/SupplierBriefOverviewSection";
import SupplierUserManual from "./Supplier/SupplierUserManual/SupplierUserManual";
import Footer from "./SupplierFooter/Footer";
import LogoWithLink from "./LogoWithLink/LogoWithLink";

function Supplier({mailLink , phoneLink}) {
  const [content, setContent] = useState({
    contentFontSize: "clamp(1.15rem, 0.1832rem + 2.0168vw, 2.2rem)",
    contentWidth: "clamp(21rem, 3.4615rem + 36.5385vw, 40rem)",
    data: [
      "Indiwater provides a digital and easy-to-use app that automatically tracks all orders placed by your customers and delivered by your delivery partners. ",
    ],
    waterDropImage: "/Images/SupplierWaterDrop.png",
    link: "https://play.google.com/store/apps/details?id=com.waterdrop.supplier",
  });

  return (
    <>
      <HeadSection data={content} />
      <LogoWithLink link={content.link} />
      <SupplierBriefOverviewSection />
      <WaterDropImageSection
        waterDropImage={content.waterDropImage}
        link={content.link}
      />
      <SupplierUserManual />
      <Footer link={content.link} mailLink={mailLink} phoneLink={phoneLink} />
    </>
  );
}

export default Supplier;
