import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import GloceryList from './components/GloceryList';
import Footer from './components/Footer';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteitem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className='app'>
      <Header />
      <Form onAddItem={handleAddItem} />
      <GloceryList
        groceryItems={items}
        onDeleteItem={handleDeleteitem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer gloceryItems={items} />
    </div>
  );
}
