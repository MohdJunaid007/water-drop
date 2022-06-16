import React from "react";
import "./LogowithLink.css";

function LogoWithLink({ link }) {
  return (
    <div className="logoLink-with-main">
      <div className="logoLink-with-sub my-5">
        <div className="logoWithLink">
          <img
            src={process.env.PUBLIC_URL + `/Images/LogoWithLink.png`}
            onClick={() =>
              (window.location = link)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default LogoWithLink;
