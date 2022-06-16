import React, { useState } from "react";
import UserManual from "../../UserManual/UserManual";

function SupplierUserManual() {
  const [headSectionData] = useState({
    title: "NEED HELP USING OUR APP? ",
    subTitle: "USER MANUAL",
    titleContent: "The steps given below might help",
  });
  const [stepSections] = useState([
    {
      icon: "/Images/customerAdd.png",
      details: [
        {
          title: "Create new account",
          steptype: "flex",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Fill in all the details with valid information",
            "Select yes or no for the security money and fast delivery question",
            "If yes, enter the amount you charge",
            "Click on the Open map button for store location",
            "Enter store owner details and Aadhar details",
            "Click Next",
          ],
          completionMassage: "",
        },
        {
          title: "Upload Documents",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: ["Enter your PAN, GST and Bank Details", "Click Next"],
        },
        {
          title: "Create a Password",
          steptype: "flex",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Fill in your created password",
            "Re-enter your password",
            "Click on the Verify Phone Number button",
            "Enter the received OTP",
            "Read all the terms and conditions and click the checkbox",
            "Click on Register My Store button",
          ],
          completionMassage: "Congrats, Your store has been registered",
        },
      ],
    },
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
      ],
    },
    {
      icon: "/Images/AddRemoveItem.png",
      details: [
        {
          title: "Add Item",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Add Item page from the Navbar",
            "Click on Add Item button",
            "Choose the category of the item",
            "Fill in the required details",
            "Click Add Item button",
          ],
        },
        {
          title: "Remove Item",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Add Item page from the Navbar",
            "Click on Remove Items button",
            "Select the items you want to delete",
            "Click on the Delete Icon",
          ],
        },
      ],
    },
    {
      icon: "/Images/AddRemoveOnOffDP.png",
      details: [
        {
          title: "Add Delivery partner",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Add Delivery Partner page from the Navbar",
            "Click on Add Delivery Partner button",
            "Enter the valid details",
            "Click on the Add button",
          ],
        },
        {
          title: "Remove Delivery Partner",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Add Delivery Partner page from the Navbar",
            "Click on Remove Delivery Partner button",
            "Select the Delivery Partner you want to delete",
            "Click on the Delete Icon",
          ],
        },
        {
          title: "On/Off Delivery Partner",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Add Delivery Partner page from the Navbar",
            "Click the toggle button according to your need",
          ],
        },
      ],
    },
    {
      icon: "/Images/ViewCustomerDetails.png",
      details: [
        {
          title: "View Customer and their Order Details",
          steptype: "flex",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Dashboard page from the Navbar",
            "From the top menu, click on Customer Info",
            "Click on view more of the selected customer",
            "Select the date",
            "Click on View Complete Order",
            "And View",
          ],
          completionMassage: "",
        },
      ],
    },
    {
      icon: "/Images/MarkAsDeliver.png",
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
      icon: "/Images/ChangeAndAssignDp.png",
      details: [
        {
          title:
            "Change the assigned Delivery Partner or Assign a Delivery Partner",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Dashboard page from the Navbar",
            "From the top menu, click on Order Received",
            "Filter by Date and Time",
            "Click on the Edit Icon",
            "Select the Delivery Partner",
          ],
        },
      ],
    },
    {
      icon: "/Images/ViewOrderHistory.png",
      details: [
        {
          title: "View Order History",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the Dashboard page from the Navbar",
            "From the top menu, select the type of order you want to view",
            "Filter by Date and Time",
            "Click on View details",
            "And View accordingly",
          ],
        },
      ],
    },

    {
      icon: "/Images/qrcode.png",
      details: [
        {
          title: "Showcase QR Code",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Click on the QR Code button on any page of the Navbar",
            "And scan",
          ],
        },
      ],
    },
    {
      icon: "/Images/ChangeSlotTiming.png",
      details: [
        {
          title: "Change Slot Timings",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile from the Navbar",
            "Click on the Change Button beside slots",
            "Enter new slot timings",
            "Click Update",
          ],
        },
        {
          title: "Change Security Money",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile from the Navbar",
            "Click on the Change Button beside Security Money",
            "Enter new Security Money",
            "Click Update",
          ],
        },
        {
          title: "Change Fast Delivery Charges",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile from the Navbar",
            "Click on the Change Button beside Fast Delivery Charges",
            "Enter new Charges",
            "Click Update",
          ],
        },
      ],
    },
    {
      icon: "/Images/ChangePhoneNumber.png",
      details: [
        {
          title: "Change Phone Number",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile from the Navbar",
            "Click on the Change Button beside Phone Number",
            "Enter new Phone Number",
            "Click on Get OTP",
            "Enter the received OTP",
          ],
        },
        {
          title: "Add/Change Email",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile from the Navbar",
            "Click on the Change/Add Button beside Email",
            "Enter new Email",
            "Click Update",
          ],
        },
        {
          title: "Add/Change Email",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile from the Navbar",
            "Click on the Change/Add Button beside Email",
            "Enter new Email",
            "Click Update",
          ],
        },
      ],
    },
    {
      icon: "/Images/HelpAndSupportHead.png",
      details: [
        {
          title: "Help and Support",
          steptype: "block",
          image: "/Images/NeedHelpImage1.png",
          steps: [
            "Go to the User Profile tab from the bottom Navigation Bar",
            "Click on Help and Support",
            "You can either directly call us on our number or submit your query in the form provided",
          ],
        },
      ],
    },
    {
      icon: "/Images/Logout.png",
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
    <React.Fragment>
      <UserManual
        headSectionData={headSectionData}
        stepSections={stepSections}
      />
    </React.Fragment>
  );
}

export default SupplierUserManual;
