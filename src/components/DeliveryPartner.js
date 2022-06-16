import React, { useState } from "react";
import HeadSection from "./HeadSection/HeadSection";
import DeliveryPartnerBriefOverviewSection from "./Delivery/DeliveryPartnerBriefOverviewSection/DeliveryPartnerBriefOverviewSection";
import WaterDropImageSection from "./WaterDropImageSection/WaterDropImageSection";
import DeliveryUserManual from "./Delivery/DeliverPartnerUserManual/DeliveryUserManual";
import Footer from "./DeliveryPartnerFooter/Footer";
import LogoWithLink from "./LogoWithLink/LogoWithLink";
function DeliveryPartner({mailLink , phoneLink}) {
  const [content, setContent] = useState({
    data: [
      "Keeping track of orders that need to be delivered is often tedious. Isn't this process even more challenging when the orders are scattered?  ",
      "Here is where IndiWater comes into play. It automatically makes a cluster of orders that you as a delivery partner have to deliver.",
    ],
    contentFontSize: "clamp(0.82rem, -0.0846rem + 1.8846vw, 1.8rem)",
    contentWidth: "clamp(21rem, 3.4615rem + 36.5385vw, 40rem)",
    waterDropImage: "/Images/DeliveryPartnerImageSection.png",
    link: "https://play.google.com/store/apps/details?id=com.waterdrop.delivery_partner",
  });
 
  return (
    <>
      <HeadSection data={content} />
      <LogoWithLink link={content.link} />
      <DeliveryPartnerBriefOverviewSection />
      <WaterDropImageSection
        waterDropImage={content.waterDropImage}
        link={content.link}
      />
      <DeliveryUserManual />
      <Footer link={content.link} mailLink={mailLink} phoneLink={phoneLink} />
    </>
  );
}

export default DeliveryPartner;
