import React, { useState } from "react";
import BriefOverviewContainer from "../../BriefOverviewContainer/BriefOverviewContainer";

function SupplierBriefOverviewSection() {
  const [overviewContent, setOverviewContent] = useState([
    {
      img: "/Images/AutomaticClusteringAndDistributionOfOrders.png",
      title: "Automatic clustering and distribution of orders",
      content:
        "Our app helps in every possible way to make your delivery system stress free",
    },
    {
      img: "/Images/AllOrderHistoryAtYourFingertips.png",
      title: "All order history at your fingertips",
      content:
        "You can access order history and customer information at any time",
    },
    {
      img: "/Images/SeparateAppForYourDeliveryPartners.png",
      title: "Separate app for your Delivery Partners",
      content:
        "We developed a separate app for your delivery partners so that they can keep track of all the orders",
    },
    {
      img: "/Images/FinancialStatistics.png",
      title: "Financial Statistics",
      content:
        "Our app provides graphical representations of your revenue over a chosen period in order to help you grow your business",
    },
    {
      img: "/Images/AddRemoveDeliveryPartner.png",
      title: "Add/Remove Delivery Partner",
      content: "Easy way to register and remove a delivery partner",
    },
    {
      img: "/Images/CustomizedImageForEachProductListed.png",
      title: "Customized image for each product listed",
      content:
        "We will provide an image for each product that closely resembles the actual product",
    },
    {
      img: "/Images/EasyFiltering.png",
      title: "Easy Filtering",
      content:
        "There are a number of filters available in the app to save that scrolling time of yours",
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

export default SupplierBriefOverviewSection;
