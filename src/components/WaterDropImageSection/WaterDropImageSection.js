import React from "react";
import "./WaterDropImageSection.css";

function WaterDropImageSection({ waterDropImage , link}) {
  const appLink = () => {
    window.open(
      link,
      "_blank"
    );
  };
  return (
    <>
      <div className="CustomerWaterDrop-main-span">
        <div className="CustomerWaterDrop-main">
          <div className="CustomerWaterDrop-img  ">
            <img src={process.env.PUBLIC_URL + waterDropImage} alt="waterDropimg" onClick={appLink} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WaterDropImageSection;
