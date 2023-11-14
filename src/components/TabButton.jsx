export default function TabButton({ children, onSelect, isSelected }) {
  const handleClick = ()=>{
    {/**passing data from child to parent component using call backs */}
    onSelect(children)
  }
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}
