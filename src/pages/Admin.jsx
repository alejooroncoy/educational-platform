import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AnimatedOutlet from "../components/shared/AnimatedOutlet";

const Admin = () => {
  return (
    <main className="main">
      <div className="container container--admin">
        <AdminSidebar />
        <AnimatePresence>
          <motion.section
            className="section"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <AnimatedOutlet />
          </motion.section>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Admin;
