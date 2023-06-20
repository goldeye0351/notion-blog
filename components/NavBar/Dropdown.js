import MenuItems from './MenuItems';
const Dropdown = ({ submenus, dropdown}) => {
  const dropdownClass = '';
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? 'show' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
