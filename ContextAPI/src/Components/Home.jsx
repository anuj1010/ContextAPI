import React, { useState } from "react";
import { ItemContext } from "../Store/ItemContext";
import List from "./List";

const Home = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAdd = () => {
    setItems((val) => {
      return [...val, item];
    });
    setItem("");
  };

  return (
    <ItemContext.Provider value={{ StoreItems: items }}>
      <div className="Container">
        <div>To Do List</div>
        <div className="InputContainer">
          <input type="text" value={item} onChange={handleChange} />
          <button onClick={handleAdd}>Add</button>
        </div>
        <List></List>
      </div>
    </ItemContext.Provider>
  );
};

export default Home;
