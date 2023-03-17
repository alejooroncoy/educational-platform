import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="aside">
      <div className="aside-container aside-container--sidebar">
        <ul className="menu menu--sidebar">
          <li className="menu__item">
            <NavLink className="menu__item__link">Cursos</NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
