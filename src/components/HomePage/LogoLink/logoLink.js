import React from "react";
import "./logoLink.css";

function logoLink({ link }) {
  const appLink = () => {
    window.open(link, "_blank");
  };
  return (
    <div className="logoLink-main">
      <div className="logoLink-sub my-5">
        <div className="logoLink">
          <img
            src={process.env.PUBLIC_URL + `/Images/LogoLink.png`}
            alt="Logo og waterdrop play button"
            onClick={appLink}
          />
        </div>
      </div>
    </div>
  );
}

export default logoLink;
