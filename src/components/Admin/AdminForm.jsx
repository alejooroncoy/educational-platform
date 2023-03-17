import { useRef, useState } from "react";
import { MdOutlineSubtitles, MdPerson, MdTimer } from "react-icons/md";
import { Form } from "react-router-dom";
import fromFormDataToJson from "../../utils/fromFormDataToJson";
import Filter from "../shared/Filter";

const AdminForm = () => {
  const form = useRef();
  const [option, setOption] = useState("all");
  const handleChangeOption = (setOptions) => {
    setOptions((options) =>
      options.map((opt) => ({
        ...opt,
        checked: opt.value === option,
      }))
    );
  };
  const handleClickOption = ({ target }) => {
    setOption(target.dataset.value);
  };
  const categories = [
    {
      child: "All Categories",
      value: "all",
      checked: true,
    },
    {
      child: "Web Development",
      value: "web-development",
    },
    {
      child: "Mobile App",
      value: "mobile-app",
    },
  ];
  const handleSubmit = async () => {
    const formData = new FormData(form.current);
    const jsonData = fromFormDataToJson(formData);
    const response = await fetch("url");
    const data = await response.json();
    // TODO
  };

  return (
    <Form ref={form} onSubmit={handleSubmit} action="post" className="form">
      <label htmlFor="title" className="form__label form__label--auth">
        <h5 className="form__label__title">Title</h5>
        <div className="form__input-container">
          <MdOutlineSubtitles color="#808080" size={19.2} />
          <input
            className="form__input form__input"
            type="text"
            name="title"
            placeholder="Your awesome title"
            id="title"
            required
          />
        </div>
      </label>
      <label htmlFor="author" className="form__label form__label--auth">
        <h5 className="form__label__title">Author</h5>
        <div className="form__input-container">
          <MdPerson color="#808080" size={19.2} />
          <input
            className="form__input form__input"
            type="text"
            name="author"
            placeholder="You or author"
            id="author"
            required
          />
        </div>
      </label>

      <label htmlFor="description" className="form__label form__label--auth">
        <h5 className="form__label__title">Description</h5>
        <textarea
          className="form__textarea"
          name="description"
          placeholder="Your awesome description"
          id="description"
          required={true}
        />
      </label>
      <label htmlFor="duration" className="form__label form__label--auth">
        <h5 className="form__label__title">Duration</h5>
        <div className="form__input-container">
          <MdTimer color="#808080" size={19.2} />
          <input
            className="form__input form__input"
            type="number"
            name="author"
            placeholder="Course duration"
            id="duration"
            required
          />
        </div>
      </label>
      <label htmlFor="title" className="form__label form__label--auth">
        <h5 className="form__label__title">Categories</h5>
        <Filter
          name="category"
          type="select"
          className="button button--select"
          classNameList="menu menu--categories"
          optionClassName="menu__item menu__item--categories"
          options={categories.map((category) => ({
            ...category,
            child: (
              <button
                data-value={category.value}
                className="button"
                onClick={handleClickOption}
              >
                {category.child}
              </button>
            ),
          }))}
          handleChangeOption={handleChangeOption}
          deps={option}
        />
      </label>
      <button className="button button--form-course">Create course</button>
    </Form>
  );
};

export default AdminForm;
