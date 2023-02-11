import { useContext } from "react";
import css from "./Home.module.scss";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import { fadeIn } from "../../utils/motion";
import Experties from "../Experties/Experties";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../context/auth.context";

const Home = () => {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElement}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            <h1>Welcome to CityStroll</h1>
            {isLoggedIn && <p>Welcome back {user.username}!</p>}
            Enjoy the city like a local
            <br />
            every time
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="secondaryText"
          >
            Create customized travel routes
            <br />
            and experience cities in a unique way!
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("down", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 1.3)}
            src="images/editadaNormal.png"
            alt=""
            width="270"
          />
        </motion.div>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.experience}
          >
            <div className="primaryText">+1000</div>

            <div className="secondaryText">
              <div>Travel</div>
              <div>Routes</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Experties />
      <Footer />
    </section>
  );
};

export default Home;
