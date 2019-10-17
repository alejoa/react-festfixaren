import React from "react";
import ferryRoutes from "../json-data/routes.json";

export const FerryRoutes = ({ setFerryRoute }) => {
  return (
    <select onChange={event => setFerryRoute(event.target.value)}>
      <option>Select route</option>
      {ferryRoutes.map(item => (
        <option key={item.url} value={item.url}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
