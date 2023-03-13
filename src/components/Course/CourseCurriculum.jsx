import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

const CourseCurriculum = () => {
  const course = useOutletContext();
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-container section-container--info section-container--course">
        <h2 className="section__title section__title--course">Description</h2>
        <p className="section__paragraph section__paragraph--info">
          {course.description}
        </p>
      </div>
    </motion.section>
  );
};

export default CourseCurriculum;
