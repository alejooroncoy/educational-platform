import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { Link } from "react-router-dom";
import getStars from "../../utils/getStars";

const CourseCard = ({ course }) => {
  const stars = getStars(course);
  return (
    <article className="card">
      <Link className="card-container" to={`/course/${course.id}`}>
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
          <p className="card__paragraph">{course.description}</p>
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
          <h6 className="card__level">
            <GiSettingsKnobs size={15} color="#718096" /> {course.level} level
          </h6>
          <ul className="menu menu--stars" aria-label="Stars">
            {stars.map((startStatus) => (
              <li
                key={crypto.randomUUID()}
                className="menu__item menu__item--stars"
              >
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
          <h3 className="card__price">
            z{course.price === "free" ? "Free" : `$${course.price}`}
          </h3>
        </footer>
      </Link>
    </article>
  );
};

export default CourseCard;
