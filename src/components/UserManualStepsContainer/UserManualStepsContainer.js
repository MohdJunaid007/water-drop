import React, { useState, useEffect, useRef } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./UserManualStepsContainer.css";

function UserManualStepsContainer({
  componentType,
  details,
  detailsNum,
  active,
  activateSection,
  headIcon,
}) {
  // const { gridCols, setGridCols } = useState(5);

  const detailRef = useRef(null);
  let [flag, setFlag] = useState(false);

  useEffect(() => {
    if (active && flag) {
      let position = detailRef.current.getBoundingClientRect();
      window.scrollTo({
        left: position.left,
        top: position.top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
    setFlag(true);
  }, [active, detailsNum]);
  return (
    <React.Fragment>
      <div className="user-manual  md:mr-20 md:ml-20 " ref={detailRef}>
        <div className="user-manual-list rounded-lg ">
          <div
            className="user-manual-list-auth    cursor-pointer"
            id="Auth-manual"
            onClick={activateSection}
          >
            <div className="flex">
              <div className="user-manual-icon m-auto ">
                <img className="m-2" src={process.env.PUBLIC_URL + headIcon} />
              </div>
              <div className="p-1 flex m-auto customer-manual-list-name ml-1">
                {details && Array.isArray(details) ? (
                  details.map((item, index) => (
                    <p className="steps-heading" key={index}>
                      {item.title}
                    </p>
                  ))
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </div>
            </div>
            <div className="customer-manual-open-close-icon p-1 mt-auto mb-auto">
              <i
                className={`fa fa-thin fa-angle-up  head-icon-style ${
                  active ? "" : " transform-icon"
                }`}
              ></i>
              {/* <font-awesome-icon icon="fa-thin fa-angle-up" /> */}
            </div>
          </div>
        </div>
        <div
          className={` ${
            active ? " user-manual-details" : "user-manual-details-transition"
          }
      `}
        >
          {/* {console.log(details)} */}
          {details && Array.isArray(details) ? (
            details.map((item, index) => (
              <div className="user-manual-auth" key={index}>
                {details.length > 1 ? (
                  <div className="auth-heading">{item.title}</div>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                <div
                  className="grid grid-row-1  md:pr-1 md:pl-4 pr-4 grid-flow-col"
                  style={{
                    marginTop: "2rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.steptype === "block" ? (
                    <div
                      className="m-auto"
                      style={{
                        marginLeft:
                          "clamp(0.9375rem, -0.6048rem + 6.8548vw, 6.25rem)",
                        marginTop: "0",
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="bs-vertical-wizard">
                              <ul>
                                {item.steps && Array.isArray(item.steps) ? (
                                  item.steps.map((step, stepIndex) => (
                                    <li
                                      className="bs-vertical-complete"
                                      key={stepIndex}
                                    >
                                      <p>
                                        <ul className="bs-vertical-content-data">
                                          <div className="bs-vertical-content-data-div">
                                            <i className="fa-solid fa-circle customer-manual-step-circle"></i>
                                          </div>
                                          <div>
                                            <p className="customer-manual-step-number">
                                              Step {stepIndex + 1}
                                            </p>
                                            <i className="ico fa-solid fa-circle-check ico-blue"></i>
                                            <span className="step-desc">
                                              {step}
                                            </span>
                                          </div>
                                        </ul>
                                      </p>
                                    </li>
                                  ))
                                ) : (
                                  <React.Fragment></React.Fragment>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="m-auto"
                      style={{
                        marginTop: "0",
                      }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="bs-vertical-wizard bs-vertical-wizard-grid">
                              <ul
                                className={
                                  "md:grid md:grid-rows-5 grid-flow-col "
                                }
                                style={{
                                  gridAutoRows:
                                    " minmax(min-content, max-content)",
                                }}
                              >
                                {item.steps && Array.isArray(item.steps) ? (
                                  item.steps.map((step, stepIndex) => (
                                    <li
                                      className="bs-vertical-complete-grid"
                                      key={stepIndex}
                                    >
                                      <p>
                                        <ul className="bs-vertical-content-data">
                                          <div className="bs-vertical-content-data-div">
                                            <i className="fa-solid fa-circle customer-manual-step-circle"></i>
                                          </div>
                                          <div>
                                            <p className="customer-manual-step-number customer-manual-step-number-grid">
                                              Step {stepIndex + 1}
                                            </p>
                                            <i className="ico fa-solid fa-circle-check ico-blue"></i>
                                            <span className="step-desc">
                                              {step}
                                            </span>
                                          </div>
                                        </ul>
                                      </p>
                                    </li>
                                  ))
                                ) : (
                                  <React.Fragment></React.Fragment>
                                )}
                                <li className="bs-vertical-complete-grid">
                                  <p>
                                    <ul className="bs-vertical-content-data">
                                      <div className="bs-vertical-content-data-div">
                                        <i className="fa-solid fa-circle customer-manual-step-circle"></i>
                                      </div>
                                      <div>
                                        <p className="customer-manual-step-number customer-manual-step-number-grid"></p>
                                        <i className="ico fa-solid fa-circle-check ico-blue"></i>
                                        <span className="step-desc">
                                          {item.completionMassage}
                                        </span>
                                      </div>
                                    </ul>
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="auth-content-img m-auto">
                    <img
                      src={process.env.PUBLIC_URL + item.image}
                      className="m-auto"
                    />
                  </div>
                </div>
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
export default UserManualStepsContainer;
