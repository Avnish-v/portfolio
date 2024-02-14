import React from 'react'
import { Link } from 'react-scroll'
import { useContextData } from '../Provider/Mode'
import { Moon } from '../Assets/Svg'

const Menu = () => {
    const  {mode,  setMode} = useContextData();
  return (
 <div className='absolute w-screen top-[65px] h-screen  overflow-y-hidden  z-50' style={{background : mode ? "black" : "white"}}>
 <ul
          className={`flex flex-col gap-10 items-center list-none cursor-pointer ${
            mode ? "text-white" : "text-black"
          } text-base font-semibold `}
        >
          <li className="hover:text-blue-800 mt-5">
            <Link to="About" smooth={true} duration={100}>
              About
            </Link>
          </li>
          <li className="hover:text-blue-800">
            <Link to="Skills" smooth={true} duration={100}>
              Skills{" "}
            </Link>
          </li>
          <li className="hover:text-blue-800">
            {" "}
            <Link to="Project" smooth={true} duration={100}>
              Project
            </Link>
          </li>
          <li className="hover:text-blue-800">
            <Link to="Exp" smooth={true} duration={100}>
              Experience
            </Link>
          </li>
          <li className="hover:text-blue-800">
            <Link to="contact" smooth={true} duration={100}>
              Contact
            </Link>
          </li>
         
        </ul>

 </div>
  )
}

export default Menu