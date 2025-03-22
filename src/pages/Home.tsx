import { motion } from "framer-motion";

 const Home = (): React.JSX.Element => {
    return (
      <motion.h1 
        style={{marginLeft : "10px", marginTop : "60px"}}
        initial={{ y: 10, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration : 0.3 }}
        >
          홈 페이지입니다 🏠
      </motion.h1>
    );
  }

  export default Home;
  