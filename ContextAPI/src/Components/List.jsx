import React, { useContext, useState, useEffect } from "react";
import { ItemContext } from "../Store/ItemContext";

const List = () => {
  const data = useContext(ItemContext);
  const items = data.StoreItems;

  useEffect(() => {
    setDisplayItems(items);
  }, [items]);

  const [displayItems, setDisplayItems] = useState([]);

  const handleDelete = (key) => {
    var temp = displayItems.filter((val, index) => {
      if (!(index == key)) {
        return val;
      }
    });
    setDisplayItems(temp);
  };

  return (
    <>
      {displayItems.map((val, index) => {
        return (
          <div className="ItemContainer" key={index}>
            <div key={index}> {val} </div>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;
