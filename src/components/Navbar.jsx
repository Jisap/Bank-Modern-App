import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);


  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={ logo } alt="hoobank" className="w-[124px] h-[32px]" />

      {/* sm:flex indica que se mostrará este ul mientras el ancho del navegador sea de 768px */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        { navLinks.map((nav, index) => (
          <li 
            key={ nav.id }
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white
            ${index === navLinks.length-1 ? 'mr-0' :'mr-10'}`}  // margen derecho dinámico para que el último elemento tenga mr=0
          >
            <a href={`#${nav.id}`}>
              { nav.title }
            </a>
          </li>
        )) }
      </ul>

      {/* Para tamaños inferiores a 768px se mostrará este otro menú */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={ toggle ? close : menu }
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(( prev )=> !prev)}   
        />
          <div 
            className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
             <ul className="list-none flex justify-end items-start flex-1 flex-col">
            { navLinks.map((nav, index) => (
              <li
                key={ nav.id }
                className={`font-poppins font-medium cursor-pointer text-[16px] 
                ${ active === nav.title ? "text-white" : "text-dimWhite" } 
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          </div>
      </div>

    </div>
  )
}

export default Navbar