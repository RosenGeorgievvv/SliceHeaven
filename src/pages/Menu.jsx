import React, { useState } from "react";
import "../styles/Menu.css";
import Items from "../components/Items";
import data from "../data/data";

const Menu = () => {

  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
    console.log("Basket:", basket);
  };


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
              onAddToBasket={() => handleAddToBasket(item)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
