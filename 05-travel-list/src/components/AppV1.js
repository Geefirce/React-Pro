import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearLists(item) {
    const confirmed = window.confirm(
      "Are you sure you want to delete all itmes ?"
    );

    if (confirmed) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearLists}
      />
      <Stats items={items} />
    </div>
  );
}
