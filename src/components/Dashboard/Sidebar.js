import React from "react";
import Constants from "../../Constants";

const Sidebar = ({ selectedValue, handleChange }) => {
  return (
    <div className="sidebar">
      {Constants.options.map((o) => {
        return (
          <div
            onClick={() => handleChange(o.id)}
            className={selectedValue === o.id ? "selected" : ""}
          >
            <img src={o.icon} alt={o.name} />
            {o.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
