import {motion} from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0, transition: { opacity: { delay: 0.2 } } },
  exit: { opacity: 0, x: 0, y: -100 },
};
const Layout = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className={"mx-auto max-w-6xl px-4 xs:px-5 md:px-8 xl:px-0"}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
