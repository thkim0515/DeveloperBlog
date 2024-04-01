import React, { useState, useEffect } from "react";
import axios from "axios";

export function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("/api/userdata");
        setItems(res.data[0].items);
      } catch (error) {
        console.error("Fetching items failed:", error);
      }
    };

    fetchItems();
  }, []);

  console.log(items);
  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.pid}>
            {item.writer}: {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
