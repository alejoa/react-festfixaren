import React from "react";
import { Link } from "react-router-dom";

export const RenderMenu = ({ menu }) => {
  console.log(menu);
  return (
    <div>
      <h1>{menu.name}</h1>
      <p>{menu.desc}</p>
      <ul>
        {menu.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export const RenderResult = () => {
  return <p>Calculation</p>;
};

export const RenderLink = ({ children, pageIndex }) => {
  return <Link to={`/${pageIndex}`}>{children}</Link>;
};
