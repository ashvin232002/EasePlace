import React from "react";
// import image_car from "./image_car.jpg";
import "./Sender.css";

var data = require("../../data/city.json");
// var data = require("./tbl_country.json");
function City({placeholder,value,setValue,stateValue,Reference}) {
  
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
  };
  return (
    <>
       <div>
       <input ref={Reference}
            className="mx-auto text-center w-[280px] px-6 h-12 my-1 border border-1 outline-blue-600 border-gray-200 rounded-lg "
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value?value.toLowerCase():'';
                const fullName = item.name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm &&
                  item.state_name===stateValue
                );
              })
              .slice(0, 3)
              .map((item,i) => (
                <div key={i}
                  onClick={() => onSearch(item.name)}
                  className="dropdown-row"
                >
                  {item.name}
                </div>
              ))}
          </div>
      </div>
    </>
  );
}
export default City;
