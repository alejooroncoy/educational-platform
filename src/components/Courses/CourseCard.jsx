import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import getStars from "../../utils/getStars";

const CourseCard = ({ course }) => {
  const stars = getStars(course);
  return (
    <article className="card">
      <header className="card__header">
        <img
          className="card__img"
          width={340}
          src={course.img}
          alt={`Course ${course.title}`}
        />
      </header>
      <div className="card__main">
        <h3 className="card__title">{course.title}</h3>
        <h4 className="card__subtitle">{course.teacher}</h4>
        <ul className="menu menu--features">
          <li className="menu__item">
            <span className="menu__item__feature">
              {course.duration} total hours
            </span>
          </li>
          <li className="menu__item">
            <span className="menu__item__feature menu__item__feature--dot">
              ·
            </span>
          </li>
          <li className="menu__item">
            <span className="menu__item__feature">
              {course.lectures} lectures
            </span>
          </li>
        </ul>
      </div>
      <footer className="card__footer">
        <ul className="menu menu--stars">
          {stars.map((startStatus) => (
            <li className="menu__item menu__item--stars">
              {startStatus === "complete" ? (
                <FaStar color="#febe42" />
              ) : startStatus === "half" ? (
                <FaStarHalfAlt color="#febe42" />
              ) : (
                <FaRegStar color="#febe42" />
              )}
            </li>
          ))}
        </ul>
        <h3 className="card__price">${course.price}</h3>
      </footer>
    </article>
  );
};

export default CourseCard;
