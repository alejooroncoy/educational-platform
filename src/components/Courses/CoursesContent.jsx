import CoursesList from "./CoursesList";

const CoursesContent = ({ category }) => {
  const categoryTitle = category === "all" ? "All" : category;

  return (
    <section className="section">
      <div className="section-container">
        <h2 className="section__title">{categoryTitle} Courses</h2>
        <CoursesList category={category} />
      </div>
    </section>
  );
};

export default CoursesContent;
