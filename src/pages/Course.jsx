import { redirect, useOutlet, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CourseNav from "../components/Course/CourseNav";
import CoursesHero from "../components/Course/CourseHero";
import { useEffect, useState } from "react";
import Spinner from "../components/shared/Spinner";

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
  const [loading, setLoading] = useState(true);
  const outlet = useOutlet(course);

  const getCourse = async () => {
    const response = await fetch(
      `https://apimocha.com/education-platform/course/${id}`
    );
    const data = await response.json();
    setCourse(data);
    setLoading(false);
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.article
          key="loading"
          initial={{
            translateY: 0,
          }}
          animate={{
            translateY: 0,
          }}
          exit={{
            translateY: "100%",
          }}
          transition={{
            duration: 0.25,
          }}
          className="spinner-container spinner-container--course"
        >
          <Spinner className="spinner" />
          <h2 className="spinner__title">Loading course content</h2>
        </motion.article>
      ) : (
        <motion.main
          key="content"
          initial={{
            translateY: "100%",
          }}
          animate={{
            translateY: 0,
          }}
          exit={{
            translateY: "100%",
          }}
          transition={{
            duration: 0.25,
          }}
          className="main main--course"
        >
          <CoursesHero course={course} />
          <CourseNav />
          <AnimatePresence>{outlet}</AnimatePresence>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Course;
