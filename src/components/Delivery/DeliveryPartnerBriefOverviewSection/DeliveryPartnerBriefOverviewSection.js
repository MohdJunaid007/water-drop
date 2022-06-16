import React, { useState } from "react";
import BriefOverviewContainer from "../../BriefOverviewContainer/BriefOverviewContainer";

function DeliveryPartnerBriefOverviewSection() {
  const [overviewContent] = useState([
    {
      img: "/Images/SeparateTabsForReceivedUrgentAndDeliveredOrders.png",
      title: "Separate tabs for received, urgent, and delivered orders",
      content: "This allows better segregation of orders",
    },
    {
      img: "/Images/EasyToUseApplication.png",
      title: "Easy to use application",
      content:
        "Switching to the digital world can be intimating? We have designed our app to be user-friendly and self-explanatory, so you won't have any problems",
    },
    {
      img: "/Images/AccessTheSuppliersQRCodeEasily.png",
      title: "Access the Supplier’s QR code easily",
      content:
        "Want customers to connect quickly? Hence we have provided a QR Code button on every page of the Navbar",
    },
    {
      img: "/Images/AvailabilityToggleButton.png",
      title: "Availability toggle button",
      content:
        "Whether you're taking a break or have finished your slot, you can quickly change your availability with our slider.",
    },
    {
      img: "/Images/HelpAndSupport.png",
      title: "Help and support",
      content:
        "Facing issues using our app? No worry, just use our Help and Support facility",
    },
  ]);
  return (
    <React.Fragment>
      <div className="lg:hidden ">
        <BriefOverviewContainer overviewContent={overviewContent} />
      </div>
    </React.Fragment>
  );
}

export default DeliveryPartnerBriefOverviewSection;
