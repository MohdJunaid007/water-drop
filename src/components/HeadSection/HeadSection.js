import React from "react";
import "./HeadSection.css";

function HeadSection({ data }) {
  return (
    <React.Fragment>
      <div className="HeadSection-main-span">
        <div className="HeadSection-main">
          <div className="HeadSection-banner w-100 ">
            <div className="HeadSection-main-contnet m-auto grid  sm:grid-cols-1  sm:grid-flow-row-dense   md:grid-cols-2 ">
              <div className="HeadSection-main-contnet-title HeadSection-slider-content  block md:m-auto md:mx-5">
                <div className="">
                  <span className="HeadSection-main-contnet-subtitle customer-main-contnet-subtitle  text-blue-500 font-semibold leading-snug ">
                    {data.data && Array.isArray(data.data) ? (
                      data.data.map((content, contentIndex) => (
                        <p
                          className=""
                          style={{
                            fontSize: data.contentFontSize,
                            width: data.contentWidth,
                          }}
                          key={contentIndex}
                        >
                          {content} <br />
                        </p>
                      ))
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeadSection;
