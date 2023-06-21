import MenuItems from './MenuItems';
const Dropdown = ({ submenus, dropdown, className}) => {
  const dropdownClass = '';
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? 'show' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems className={className}
          items={submenu}
          key={index}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
