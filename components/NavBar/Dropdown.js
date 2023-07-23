import MenuItems from './MenuItems';
const Dropdown = ({ submenus, dropdown}) => {
  const dropdownClass = '';
  return (
    <ul
      className={` dropdown ${dropdownClass} ${dropdown ? 'show' : ''}
      bg-gray-300 dark:bg-gray-600  p-1 
      `}
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
