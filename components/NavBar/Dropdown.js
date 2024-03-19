import MenuItems from './MenuItems';
const Dropdown = ({ submenus, dropdown}) => {
  const dropdownClass = '';
  return (
    <ul
      className={` dropdown ${dropdownClass} ${dropdown ? 'show' : ''}
      bg-gray-700 dark:bg-gray-800  absolute top-10 translate-x-6 md:translate-x-0
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
