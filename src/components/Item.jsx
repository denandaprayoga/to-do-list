export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item.id}>
      <input
        type='checkbox'
        checked={item.checked}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={item.checked ? 'list-checked' : null}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
