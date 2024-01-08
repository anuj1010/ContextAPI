import React, { useContext } from "react";
import { ItemContext } from "../Store/ItemContext";

const List = () => {
  const data = useContext(ItemContext);
  const items = data.StoreItems;

  return (
    <>
      {items.map((val, index) => {
        return <div key={index}> {val} </div>;
      })}
    </>
  );
};

export default List;
