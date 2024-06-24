import MenuItems from './MenuItems';
const Dropdown = ({ submenus, dropdown}) => {
  return (
    <div className={`  ${dropdown ? 'block ' : 'hidden' }
      z-10 absolute right-1 top-10 left-0 rounded-md  
      bg-gray-700 dark:bg-gray-800 
      translate-x-8 md:translate-x-0      `}
    >
      {submenus.map((submenu, index) => (
        <MenuItems 
          items={submenu}
          key={index}
        />
      ))}
    </div>
  );
};

export default Dropdown;
