import React, { useState } from "react";
// import { useState } from 'react';
import UserManual from "../../UserManual/UserManual";

function DeliveryUserManual() {
  const [headSectionData] = useState({
    title: "NEED HELP USING OUR APP? ",
    subTitle: "USER MANUAL",
    titleContent: "The steps given below might help",
  });
  const [stepSections] = useState([
    {
      icon: "/Images/customerAuth.png",
      details: [
        {
          title: "Login",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Enter your Registered Mobile Number",
            "Enter your valid password",
            "Click on Login",
            // "Click Log In",
          ],
        },
        {
          title: "Forgot Password",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Login page",
            "Click on Forgot Password ",
            "Enter the Registered Phone Number and generate OTP",
            "Enter the OTP received on your Registered Mobile Number and click Verify",
            "Log in with the changed Password",
          ],
        },
        {
          title: "Change Password",
          steptype: "flex",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Click on the User Profile from the bottom Navbar",
            "Click on the Change Password button",
            "Enter the OTP received on your Registered Mobile Number and Click Verify OTP button",
            "Create a new password",
            "Click on the Update Password button",
            "Login again with new credentials",
          ],
          completionMassage: "",
        },
      ],
    },
    {
      icon: "/Images/Deliverybox.png",
      details: [
        {
          title: "Mark as Delivered",
          steptype: "flex",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Dashboard page from the Navbar",
            "From the top menu, click on Order Received",
            "Filter by Date and Time",
            "Click on View more",
            "Click on Mark as Delivered",
            "Enter the number of cans and cash received",
            "Click Submit",
          ],
          completionMassage: "",
        },
      ],
    },
    {
      icon: "/Images/qrcode.png",
      details: [
        {
          title: "Access supplier QR code",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to Dashboard from the bottom Navbar",
            "Click on the QR code button",
          ],
        },
      ],
    },

    {
      icon: "/Images/on_off.png",
      steptype: "block",
      details: [
        {
          title: "On/Off Delivery Partner",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile page from the bottom Navbar",
            "Use the slider to ON/OFF your availability accordingly",
            // "You can either directly call us on our number or submit your query in the form provided",
          ],
        },
      ],
    },

    {
      icon: "/Images/HelpAndSupport.png",
      details: [
        {
          title: "Help and Support",
          image: "/Images/NeedHelpImage1.png",
          steptype: "block",
          steps: [
            "Go to the User Profile tab from the bottom Navigation Bar",
            "Click on Help and Support",
            "You can either directly call us on our number or submit your query in the form provided",
          ],
        },
      ],
    },

    {
      icon: "/Images/logout.png",
      steptype: "block",
      details: [
        {
          title: "Logout",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile from the Navbar",
            "Click on the Log Out Button",
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <UserManual
        headSectionData={headSectionData}
        stepSections={stepSections}
      />
    </>
  );
}

export default DeliveryUserManual;
