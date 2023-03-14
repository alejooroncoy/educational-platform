import { motion } from "framer-motion";
import { createElement, useLayoutEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const FilterOption = ({ type, option, className, as = "li", name }) => {
  const { child, value, lastChecked, checked } = option;
  const location = useLocation();
  const navigate = useNavigate();
  const changeOption = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const search = new URLSearchParams(location.search.replace("?", ""));
    search.set(name, value);
    navigate(`${location.pathname}?${search.toString()}`, {
      preventScrollReset: true,
    });
  };
  if (type === "radio")
    return (
      <motion.label key={option.id} className={className} htmlFor={value}>
        <motion.input
          onChange={changeOption}
          className={className && `${className}__input`}
          name={name}
          id={value}
          type="radio"
          value={value}
          defaultChecked={checked}
          initial={{
            "--scale-value": lastChecked === checked ? (checked ? 1 : 0) : 0,
            boxShadow:
              lastChecked === checked
                ? checked
                  ? "0 0 0rem 0.1rem #2a41e8"
                  : "0 0 0rem 0.1rem #b4b4b4"
                : "0 0 0rem 0.1rem #b4b4b4",
          }}
          animate={{
            "--scale-value": checked ? 1 : 0,
            boxShadow: checked
              ? "0 0 0rem 0.1rem #2a41e8"
              : "0 0 0rem 0.1rem #b4b4b4",
          }}
          transition={{
            duration: 0.25,
          }}
        />
        <span className={className && `${className}__text`}>{child}</span>
      </motion.label>
    );
  if (type === "select")
    return createElement(as, {
      "data-value": value,
      className,
      children: typeof child === "string" ? child.replace("-", " ") : child,
    });
};

const Filter = ({
  type,
  options: optionsGetted,
  className,
  optionClassName,
  classNameList,
  name,
}) => {
  const arrowSelect = useRef();
  const menu = useRef();
  const [options, setOptions] = useState(optionsGetted);
  const location = useLocation();

  const toogleMenu = () => {
    arrowSelect.current.classList.toggle("button__arrow--open");
    menu.current.classList.toggle("menu--categories-open");
  };

  useLayoutEffect(() => {
    const search = new URLSearchParams(location.search.replace("?", ""));
    const value = search.get(name);
    setOptions(
      options.map((option) => {
        return {
          ...option,
          checked: value ? value === String(option.value) : option.checked,
          lastChecked: option.checked,
        };
      })
    );
  }, [location]);

  if (type === "radio")
    return (
      <form className={className}>
        {options?.map((option) => (
          <FilterOption
            className={optionClassName}
            key={crypto.randomUUID()}
            option={option}
            type={type}
            name={name}
          />
        ))}
      </form>
    );
  if (type === "select")
    return (
      <div className="container container--select">
        <button onClick={toogleMenu} className={className}>
          {options?.find((option) => option.checked)?.text}
          <div ref={arrowSelect} className="button__arrow">
            <IoMdArrowDropdown />
          </div>
        </button>
        <ul ref={menu} className={classNameList}>
          {options?.map((option) => (
            <FilterOption
              className={optionClassName}
              key={crypto.randomUUID()}
              option={option}
              type={type}
            />
          ))}
        </ul>
      </div>
    );
};

const CoursesFilter = ({
  title,
  type,
  name: nameInitial,
  options,
  className,
  optionClassName,
  classNameList,
  svgEmptyContainer,
}) => {
  const name =
    nameInitial ||
    title
      .split(" ")
      .map((word) => word.toLowerCase())
      .join("-");
  const optionsMapped = options.map((option) => {
    if (typeof option === "object") return option;
    return {
      child: option,
      value: option,
      checked: false,
    };
  });
  return (
    <section className="section">
      <div className="section-container section-container--filter">
        <h2 className="section__title section__title--filter">{title}</h2>
        <Filter
          optionClassName={optionClassName}
          className={className}
          classNameList={classNameList}
          options={optionsMapped}
          type={type}
          name={name}
          svgEmptyContainer={svgEmptyContainer}
        />
      </div>
    </section>
  );
};

export default CoursesFilter;
