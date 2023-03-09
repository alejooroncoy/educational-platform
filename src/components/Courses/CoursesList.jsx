import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import CourseCard from "./CourseCard";

const CoursesList = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    const response = await fetch(
      `https://apimocha.com/education-platform/courses/${category}`
    );
    const data = await response.json();
    setCourses(data);
    setLoading(false);
  };
  useEffect(() => {
    getCourses();
  }, []);
  if (loading) return <Spinner />;
  return (
    <div className="cards">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
