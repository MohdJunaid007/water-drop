import React from "react";
import "./HandIndiwater.css";
import "./../../../App.css";
function HandIndiwater({ link }) {
  const appLink = () => {
    window.open(link, "_blank");
  };
  return (
    <div className="HandIndiWater-main-container">
      <div className="HandIndiWater-main">
        <div className="HandIndiWater-img-container">
          <img
            src={process.env.PUBLIC_URL + `/Images/handcheck.png`}
            onClick={appLink}
            style={{ cursor: "pointer" }}
            alt="handcheckimg"
          />
        </div>
        <div className="HandIndiWater-content-container">
          <ul>
            <li>
              <p>
                IndiWater provides a helping hand in the current Water-Can
                ordering and delivery system.
              </p>
            </li>
            <li>
              <p>What can we offer you as a consumer or as a supplier?</p>
            </li>
            <li>
              <p>
                As a consumer, you never need to call your supplier to get your
                water delivered and choose the speed and date of delivery
                according to your convenience.
              </p>
            </li>
            <li>
              <p>
                As a supplier, we provide you with a one-stop destination to
                view all the received and delivered orders at your fingertip.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HandIndiwater;
