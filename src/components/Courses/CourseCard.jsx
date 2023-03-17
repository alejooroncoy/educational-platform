import { GiSettingsKnobs } from "react-icons/gi";
import { Link } from "react-router-dom";
import getStars from "../../utils/getStars";
import Stars from "../shared/Stars";

const CourseCard = ({ course, Container = Link }) => {
  const stars = getStars(course);
  return (
    <article className="card">
      <Container className="card-container" to={`/course/${course.id}`}>
        <header className="card__header">
          <img
            className="card__img"
            width={340}
            height={178}
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
          <Stars className="card-stars" stars={stars} aria-label="Stars" />
          <h3 className="card__price">
            {course.price === "free" ? "Free" : `$${course.price}`}
          </h3>
        </footer>
      </Container>
    </article>
  );
};

export default CourseCard;
