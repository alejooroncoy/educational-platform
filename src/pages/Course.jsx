import { redirect, useOutlet, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CourseNav from "../components/Course/CourseNav";
import CoursesHero from "../components/Course/CourseHero";
import { useEffect, useState } from "react";

export const loaderCourse = ({ request, params }) => {
  const url = new URL(request.url);
  const id = url.pathname.split("/").at(-1);
  url.pathname += "/overview";
  if (id === params.id) return redirect(url);
  return null;
};

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const outlet = useOutlet(course);

  const getCourse = async () => {
    const response = await fetch(
      `https://apimocha.com/education-platform/course/${id}`
    );
    const data = await response.json();
    setCourse(data);
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <main className="main main--course">
      <CoursesHero course={course} />
      <CourseNav />
      <AnimatePresence>{outlet}</AnimatePresence>
    </main>
  );
};

export default Course;
