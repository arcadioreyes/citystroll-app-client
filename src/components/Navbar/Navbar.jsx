import React from 'react';
import { Link } from 'react-router-dom';
import css from './Navbar.module.scss'


const Navbar = () => {
  return (
        <header className='py-6 mb-12 border-b'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to="/">
                    {/* <img src="images/Citystroll.png" alt="logo" />
                    <a href="/">CityStroll</a> */}
                    <div className={css.name}>
                        <a href="/">CityStroll</a> 
                    </div>
                </Link>
                <div className='flex items-center gap-6'>
                    <Link className='hover:text-custom transition' to="">Log In</Link>
                    <Link className='bg-customPrimary hover:bg-customSecondary text-white px-4 py-3 rounded-lg transition' to="">Sign up</Link>
                </div>
            </div>
        </header>    
  );
};

export default Navbar
