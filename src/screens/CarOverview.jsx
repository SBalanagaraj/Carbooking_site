import React, { useState } from "react";
import "../styles/CarOverView.css";
import SelectionBlock from "../Component/SelectionBlock";
import { SlArrowDown } from "react-icons/sl";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { RiResetRightFill } from "react-icons/ri";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Drawer from "@mui/material/Drawer";
import { filters, sortBy } from "../Utiles/Datas";

const CarOverview = () => {
  const [menu, setMenu] = useState(false);
  const [isClicked, setIsClicked] = useState([0, 1, 2, 3]);
  const [checkedList, setCheckedList] = useState([]);

  const DrawerContent = () => {
    return (
      <div className="drawerScreen">
        <div className="sideHead">
          <span>Filters</span>
          <div onClick={() => setCheckedList([])} className="reset">
            <RiResetRightFill size={22} color="#ec2027" />
            <span>Reset</span>
          </div>
        </div>

        {filters.map((data, ind) => {
          const keys = Object.keys(data).join();
          return (
            <div className="filters">
              <div
                onClick={() =>
                  setIsClicked(
                    isClicked.includes(ind)
                      ? isClicked.filter((data) => data !== ind)
                      : [...isClicked, ind]
                  )
                }
                className="sideHead"
              >
                <span>{keys}</span>
                <SlArrowDown color="#000" size={12} />
              </div>
              {isClicked.includes(ind) &&
                data[keys].map((data, index) => {
                  return (
                    <FormGroup key={data}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkedList.includes(data)}
                            onChange={() =>
                              setCheckedList(
                                checkedList.includes(data)
                                  ? checkedList.filter((item) => item != data)
                                  : [...checkedList, data]
                              )
                            }
                            color="#222222"
                            style={{ borderRadius: "10px" }}
                          />
                        }
                        label={data}
                        style={{
                          fontFamily: "Manrope-Regular",
                          fontSize: "22px",
                        }}
                      />
                    </FormGroup>
                  );
                })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container">
      <SelectionBlock />
      <div className="bodyContainer">
        {/* Side heading */}
        <div className="sideHead">
          <p>our Newest blog </p>
          <p>frontend branch creation </p>
          <div>
            <div className="dropDowns">
              <>
                <div>
                  <span>sort by </span>
                  <span>:</span>
                  <span>Popular</span>
                </div>
                <SlArrowDown />
              </>
              <div className="list">
                {sortBy.map((data) => {
                  return <span>{data}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
        {/* right Menu */}
      </div>
      <button onClick={() => setMenu(!menu)} className="menuIcon">
        <HiOutlineAdjustmentsHorizontal color={"#ebebeb"} size={28} />
      </button>

      <Drawer
        style={{ backgroundColor: "transparent" }}
        anchor={"right"}
        open={menu}
        onClose={() => {
          setMenu(false);
        }}
      >
        <div
          style={{
            width: "400px",
            height: "100%",
            backgroundColor: "#ffffff",
            borderLeft: "10px solid #ebebeb",
          }}
        >
          {/* <div
            style={{
              width: "300px",
              borderLeft: "8px solid #ebebeb",
              height: "100%",
              backgroundColor: "#ffffff",
            }}
          >
            <button className="close">
              <MdClose size={30} color="#333333" />
            </button>
          </div> */}
          <DrawerContent />
        </div>
      </Drawer>
    </div>
  );
};

export default CarOverview;
