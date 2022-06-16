import React, { useState } from "react";
import BriefOverviewContainer from "../../BriefOverviewContainer/BriefOverviewContainer";

function CustomerBriefOverviewSection() {
  const [overviewContent, setOverviewContent] = useState([
    {
      img: "/Images/OrderAnytime.png",
      title: "Order Anytime",
      content: "Place your order at your convenience 24/7",
    },
    {
      img: "/Images/UrgentDelivery.png",
      title: "Urgent Delivery",
      content:
        "Need water within an hour? No worries, place an urgent delivery with us",
    },
    {
      img: "/Images/WalletSystem.png",
      title: "Wallet System",
      content:
        "Loved the account system with your supplier? We've got you covered with our wallet system",
    },
    {
      img: "/Images/OnlinePayment.png",
      title: "Online Payment",
      content:
        "Enjoy the convenience of all payment methods at your fingertips",
    },
    {
      img: "/Images/ScheduleYourOrder.png",
      title: "Schedule Your Order",
      content:
        "Want to place an order for upcoming days? Schedule your delivery for the upcoming 10 days",
    },
    {
      img: "/Images/AddtoCartSystem.png",
      title: "Add to Cart System",
      content:
        "Want to place an order later? Keep the items saved in the cart for faster checkouts",
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

export default CustomerBriefOverviewSection;
