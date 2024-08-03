import React from "react";
import "../styles/Menu.css";
import Items from "../components/Items";
import data from "../data/data";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {data.map((item, key) => {
          return (
            <Items
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
