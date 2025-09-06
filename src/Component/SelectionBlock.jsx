import React from "react";
import "../styles/components.css";
import { SlArrowRight } from "react-icons/sl";

const SelectionBlock = () => {
  const Selection = ({ text1, text2 }) => {
    return (
      <div className="selection">
        {text1 && text1 != "" && (
          <span>{text1.charAt(0).toUpperCase() + text1.slice(1)}</span>
        )}
        <span>{text2}</span>
      </div>
    );
  };

  return (
    <>
      <div className="topSection">
        <div className="topSecCont">
          <div className="leftCon">
            <Selection text1={"from"} text2={"Madurai"} />
            <Selection text1={"to"} text2={"Banglore"} />
            <Selection text1={"Starting Date"} text2={"22/09/25"} />
            <Selection text1={"ending Date"} text2={"27/09/26"} />
            <Selection text1={"Travellers"} text2={"4 adult 2 children"} />
          </div>

          <input type="text" className="rightCont" placeholder="SEARCH" />
        </div>
      </div>
      <div className="bannerBlock">
        <div className="container">
          <h1>CAB OVERVIEW</h1>
          <p>
            home
            <SlArrowRight
              size={18}
              color="#fff"
              style={{ paddingRight: "5px", paddingLeft: "5px" }}
            />
            Cab
          </p>
        </div>
      </div>
    </>
  );
};

export default SelectionBlock;
