import React from "react";
import menus from "../json-data/menus.json";

export const Menus = ({ setMenu }) => {
  return (
    <select onChange={event => setMenu(event.target.value)}>
      <option value="Select menu">Select menu</option>
      {menus.map((item, index) => (
        <option key={index} value={index}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
