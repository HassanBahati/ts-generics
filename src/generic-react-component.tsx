interface DropdownProps<T> {
  items: T[];
  onSelect: (item: T) => void;
}

function Dropdown<T>({ items, onSelect }: DropdownProps<T>) {
  return (
    <select onChange={(e) => onSelect(items[+e.target.value])}>
      {items.map((item, index) => (
        <option key={index} value={index}>
          {item}
        </option>
      ))}
    </select>
  );
}

const stringDropdown = (
  <Dropdown items={["Option 1", "Option 2"]} onSelect={console.log} />
);
