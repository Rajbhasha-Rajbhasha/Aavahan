import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";  

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className='flex justify-between' style={{ backgroundColor: '#008080', height: "8vh", paddingRight: '10px' }}>
        <div className='w-full flex justify-between items-center'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src="/rajbhashalogo.jpeg" alt="Rajbhasha Logo" style={{ borderRadius: '50%', width: '44px', height: '44px' }} className='object-contain' />
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                style={{ fontWeight: 'bold' }}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute right-0 min-w-[140px] z-10 rounded-xl`}
              style={{ top: '3rem', marginLeft: '1rem' }}
            >
              <ul className='list-none flex justify-center items-center flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white"
                    style={{ fontWeight: 'bold' }}
                    onClick={() => setToggle(!toggle)}
                  >
                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
