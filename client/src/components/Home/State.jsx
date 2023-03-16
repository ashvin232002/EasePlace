import React from "react";
// import image_car from "./image_car.jpg";
import "./Sender.css";

var data = require("../../data/tbl_state.json");
// var data = require("./tbl_country.json");
function State({value,setValue}) {
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
       <input
            className="mx-auto text-center w-[280px] px-6 h-12 my-1 border border-1 outline-blue-600 border-gray-200 rounded-lg "
            type="text"
            placeholder="Enter The State"
            value={value}
            onChange={onChange}
          />
          <div className="dropdown">
            {data
              .filter((item,index) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.state_name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm&&
                  data.indexOf(item)===index
                );  
              }).slice(0, 3)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.state_name)}
                  className="dropdown-row"
                  key={item.state_id}
                >
                  {item.state_name}
                </div>
              ))}
          </div>
      </div>
    </>
  );
}
export default State;
