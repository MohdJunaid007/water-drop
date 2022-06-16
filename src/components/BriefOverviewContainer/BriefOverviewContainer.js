import React  from "react";
import "./BriefOverviewContainer.css";

function BriefOverviewContainer({ overviewContent }) {
  return (
    <React.Fragment>
      <div className="brief-overview-wrapper">
        <div className="brief-overview-main">
          {overviewContent && Array.isArray(overviewContent) ? (
            overviewContent.map((singleContent, singleContentIndex) => (
              <div className="brief-overview" key={singleContentIndex}>
                <img
                  src={process.env.PUBLIC_URL + singleContent.img}
                  className="m-auto brief-overview-img"
                  alt="singleContent"
                />
                <p className="brief-overview-title m-auto text-center font-semibold">
                  {singleContent.title}
                </p>
                <p className="brief-overview-content m-auto text-center">
                  {singleContent.content}
                </p>
              </div>
            ))
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default BriefOverviewContainer;
