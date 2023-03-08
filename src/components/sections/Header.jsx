import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import Logo from "../../assets/img/logo.png";
import AvatarImg from "../../assets/img/avatars/avatar-1.jpg";
import { useEffect, useRef } from "react";

const Header = () => {
  const menu = useRef();
  const overlay = useRef();
  const openMenu = () => {
    menu.current.classList.add("menu--open");
    overlay.current.classList.add("overlay--open");
  };
  const closeMenu = () => {
    menu.current.classList.remove("menu--open");
    overlay.current.classList.remove("overlay--open");
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (innerWidth > 768) closeMenu();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <button onClick={openMenu} className="button button--menu-open">
            <FiMenu size={20} />
          </button>
          <img className="nav__img" width={40} src={Logo} alt="logo" />
          <div ref={overlay} onClick={closeMenu} className="overlay"></div>
          <ul ref={menu} className="menu menu--hamburger">
            <li className="menu__item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "menu__item__link menu__item__link--active"
                    : "menu__item__link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "menu__item__link menu__item__link--active"
                    : "menu__item__link"
                }
                to="/courses"
              >
                Courses
              </NavLink>
            </li>
          </ul>
          <ul className="menu menu--profile">
            <li>
              <Link to="#">
                <HiOutlineShoppingCart size={20} color="#676666" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <BsBell size={20} color="#676666" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <BiCommentDetail size={20} color="#676666" />
              </Link>
            </li>
            <li>
              <button className="button">
                <img
                  className="menu-profile__avatar"
                  width={50}
                  src={AvatarImg}
                  alt="Avatar"
                />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;