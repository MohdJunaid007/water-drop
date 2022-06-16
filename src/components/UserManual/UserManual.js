import React, { useState } from "react";
import UserManualStepsContainer from "../UserManualStepsContainer/UserManualStepsContainer";
import "./UserManual.css";
let activeMenu = sessionStorage.getItem("activeIndex")
  ? sessionStorage.getItem("activeIndex")
  : 0;
function UserManual({ headSectionData, stepSections }) {
  const [activeSection, setActiveSection] = useState(parseInt(activeMenu));

  const changeActiveSection = (activeIndex) => {
    sessionStorage.setItem("activeIndex", activeIndex);
    setActiveSection(activeIndex);
  };

  return (
    <div className="user-manual-span ">
      <div className="user-manual-main ">
        <div className="user-manual-heading ">
          <div className="user-manual-heading-title">
            <p className="uppercase">{headSectionData.subTitle}</p>
          </div>
          <div className="user-manual-sub-title text-5xl text-center font-semibold md:my-5 m-auto">
            {headSectionData.title}
          </div>
          <div className="user-manual-heading-content text-center p-5 lg:mx-6 mb-6 font-semibold ">
            <p>{headSectionData.titleContent}</p>
          </div>
        </div>
        <div className="user-manual-main-content" id='last'>
          {stepSections.map((section, index) => (
            <UserManualStepsContainer
              key={index}
              details={section.details}
              headIcon={section.icon}
              // stepType={section.steptype}
              active={activeSection === index ? true : false}
              activateSection={() => {
                changeActiveSection(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserManual;
