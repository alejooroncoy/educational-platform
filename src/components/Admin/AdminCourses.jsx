import { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import useCourses from "../../hooks/useCourses";
import useModal from "../../hooks/useModal";
import CourseCard from "../Courses/CourseCard";
import Modal from "../shared/Modal";
import AdminForm from "./AdminForm";

const Container = ({ children, className, style }) => {
  return (
    <div
      className={"card".concat(className ? ` ${className}` : "")}
      style={style}
    >
      {children}
    </div>
  );
};

const AdminCourses = () => {
  const { courses, getCourses } = useCourses();
  const { openModal, modal, overlay } = useModal();
  const handleClickOpenModal = () => {
    openModal();
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="section-container">
      <h2 className="section__title">Admin courses</h2>
      <div className="cards">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} Container={Container} />
        ))}
        <article onClick={handleClickOpenModal} className="card card--add">
          <div className="card-container card-container--add">
            <div className="card__main card__main--add">
              <BsPlusLg size={100} />
              <h2 className="card__title card__title--add">Add course</h2>
            </div>
          </div>
        </article>
        <Modal modal={modal} overlay={overlay}>
          <header className="modal__header">
            <h2 className="modal__title">Create Course</h2>
          </header>
          <div className="modal__main">
            <AdminForm />
          </div>
          <footer className="modal__footer"></footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminCourses;
