import React from 'react'
import css from './Header.module.scss'
import { motion } from 'framer-motion'
import { headerVariants } from '../../utils/motion'
import { getMenuStyles } from '../../utils/motion'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState, useRef } from 'react'
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()
    const menuRef = useRef()

    useOutsideAlerter({
      menuRef,
      setMenuOpened,
    })
      
    

  return (
    <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{once:false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}
        style={{boxShadow: headerShadow}}
        >
      <div className={`flexCenter innerWidth ${css.container}`}>
      <img src="images/Stroll.png" alt="logo" width="100" height="100"/>
            
            <ul
            ref={menuRef} 
                style={getMenuStyles(menuOpened)}
                className={`flexCenter ${css.menu}`}>
                <li><a href="#developers"> Developers</a></li>
                <li><a href="/stroll"> Enter App</a></li>

            </ul>

            <div className={css.menuIcon}
                onClick={()=>setMenuOpened((prev) =>!prev)}
                >
                    <BiMenuAltRight size={30}/>
            </div>
      </div>
    </motion.div>
  )
}

export default Header
