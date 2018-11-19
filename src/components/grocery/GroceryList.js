import React from "react";
import GroceryHeader from "./GroceryHeader";
import { Link } from "react-router-dom";

const ListItem = ({handleBuyOrDrop, handleDelete, item}) => {
  return (
    <li className={item.isBought ?  "bought_style" : "list_item"}>
      <b>{item.name}</b>
      <div className="btn_container">
        <button
          onClick={() => handleBuyOrDrop(item._id)}
          type="button"
          className="btn btn-info">
          { item.isBought ? "Drop" : "Buy" }
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          type="button"
          className="btn btn-secondary">X</button>
      </div>
    </li>
  );
};


const GroceryList = ({ groceries, handleDelete, handleClick, handleBuy}) => {
  if (groceries.length <= 0) {
    return (
      <div className="not_found">
        <span>No groceries available</span> |
        <Link to="/Add">Add</Link>
      </div>
    );
  }
  return(
    <div className="list_container">
      <GroceryHeader
        handleClick={handleClick}/>
      <hr/>
      <ul>
        {
          groceries.map((item) => (
            <ListItem
              key={item._id}
              item={item}
              handleDelete={handleDelete}
              handleBuyOrDrop={handleBuy}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default GroceryList;
