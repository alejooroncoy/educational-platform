import { useLayoutEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation } from "react-router-dom";
import FilterOption from "./FilterOption";

const Filter = ({
  type,
  options: optionsGetted,
  className,
  optionClassName,
  classNameList,
  handleChangeOption,
  deps,
  name,
}) => {
  const arrowSelect = useRef();
  const menu = useRef();
  const [options, setOptions] = useState(optionsGetted);
  const location = useLocation();

  const toggleMenu = () => {
    arrowSelect.current.classList.toggle("button__arrow--open");
    menu.current.classList.toggle("menu--categories-open");
  };

  const handleChangeOptionDefault = () => {
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
  };
  const depsEffect = handleChangeOption ? deps : location;
  useLayoutEffect(() => {
    if (handleChangeOption) handleChangeOption(setOptions);
    else handleChangeOptionDefault();
  }, [depsEffect]);

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
  if (type === "select") {
    const optionChecked = options?.find((option) => option.checked);
    return (
      <div className="container container--select">
        <button onClick={toggleMenu} className={className}>
          {optionChecked?.text || optionChecked?.child}
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
  }
};

export default Filter;
