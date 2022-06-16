import React, { useState } from "react";
import UserManual from "../../UserManual/UserManual";

function CustomerUserManual() {
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
            "Open the app",
            "click on the Login button",
            "Enter your valid credentials",
            "Click Log In",
          ],
        },
        {
          title: "Forgot Password",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Open the app",
            "click on the Login button",
            "Enter your valid credentials",
            "Click Log In",
          ],
        },
        {
          title: "Create New Account",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Open the app",
            "Click on the Sign-Up button",
            "Enter your Credentials and create a password",
            "Click Sign Up",
          ],
        },
      ],
    },
    {
      icon: "/Images/supplierHead.png",
      details: [
        {
          title: "Add Supplier",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Enter the Supplier code or Scan the QR code provided by the supplier",
            "Click Submit",
          ],
        },

        {
          title: "Change Supplier",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Click the Sync icon on the Home page",
            "Enter the New supplier code or Scan the QR code",
            "Click Submit",
          ],
        },
      ],
    },
    {
      icon: "/Images/PlaceOrderHead.png",
      details: [
        {
          title: "Placing an Order",
          steptype: "flex",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Add the Required items to the cart",
            "Go to cart",
            "Adjust the quantity and Click on Next",
            "Use an already added address or add a new address",
            "Schedule the delivery according to your convenience",
            "Choose shipping speed and preferred mode of payment and click to place order",
            "Pay the total amount online or Choose COD",
          ],
          completionMassage:
            "Congrats, You have successfully placed your order !",
        },
        {
          title: "Order Again",
          steptype: "flex",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the My Orders tab from the bottom Navigation Bar",
            "Select the date ",
            "Click on Order Again of the preferred order",
            "Go to cart",
            "Adjust the quantity and Click on Next",
            "Use an already added address or add a new address",
            "Schedule the delivery according to your convenience",
            "Pay the total amount online or Choose COD",
          ],
          completionMassage:
            "Congrats, You have successfully placed your order !",
        },
      ],
    },

    {
      icon: "/Images/ForgotPasswordHead.png",
      steptype: "block",
      details: [
        {
          title: "Change Password",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile tab from the bottom Navigation Bar",
            "Click on Change password",
            "Click on Send OTP",
            "Verify your mobile number",
            "Create a new password",
          ],
        },

        {
          title: "Change Phone Number",
          image: "/Images/NeedHelpImage1.png",
          steptype: "block",
          steps: [
            "Go to the User Profile tab from the bottom Navigation Bar",
            "Click on Change present on the right side of the Phone Number field",
            "Enter New phone number",
            "Verify the added phone number",
            "Congrats, your Phone Number has been changed",
          ],
        },
      ],
    },

    {
      icon: "/Images/HelpAndSupportHead.png",
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
      icon: "/Images/DownloadInvoiceHead.png",
      steptype: "block",
      details: [
        {
          title: "Download Invoice",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the My Orders page from the bottom Navigation Bar",
            "Select the date",
            "Click on the view order button of the selected order",
            "Click on Invoice",
            "View",
          ],
        },
      ],
    },

    {
      icon: "/Images/OrderDetailsHead.png",
      details: [
        {
          title: "Order Details",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the My Orders page from the bottom Navigation Bar",
            "Select the date",
            "Click on the view order button of the selected order",
            "View",
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
export default CustomerUserManual;
