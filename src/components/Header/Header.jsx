import React from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import { getMenuStyles } from "../../utils/motion";
import { BiMenuAltRight } from "react-icons/bi";
import { useState, useRef } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>CityStroll</div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="#developers"> Developers</a>
          </li>
          <Link to={"/signuppage"}>
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to={"/loginpage"}>
            {" "}
            <button>Login</button>{" "}
          </Link>
        </ul>

        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
