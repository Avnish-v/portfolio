import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useContextData } from '../Provider/Mode';
import { Icons } from '../Assets';

const Menu = ({  close }) => {
  const { mode } = useContextData();

  function handleClick(e, targetId) {
    if (targetId) {
      e.preventDefault(); 
      close(); 
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const targetElement = document.getElementById(e.target.dataset.target);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      close()
    }
  }

  return (
    <div className={`fixed  w-screen top-[8%] h-screen    z-50`} style={{ background: mode ? 'black' : 'white' }}>
      <ul className={`flex flex-col gap-10 items-center list-none cursor-pointer ${mode ? 'text-white' : 'text-black'} text-base font-semibold `}>
        <li className="hover:text-blue-800 mt-5">
          <div onClick={(e) => handleClick(e, 'About')}>About</div>
        </li>
        <li className="hover:text-blue-800">
          <ScrollLink to="Skills" smooth={true} duration={100} onClick={(e) => handleClick(e)}>
            Skills
          </ScrollLink>
        </li>
        <li className="hover:text-blue-800">
          <ScrollLink to="Project" smooth={true} duration={100} onClick={(e) => handleClick(e)}>
            Project
          </ScrollLink>
        </li>
        <li className="hover:text-blue-800">
          <ScrollLink to="Exp" smooth={true} duration={100} onClick={(e) => handleClick(e)}>
            Experience
          </ScrollLink>
        </li>
        <li className="hover:text-blue-800">
          <ScrollLink to="contact" smooth={true} duration={100} onClick={(e) => handleClick(e)}>
            Contact
          </ScrollLink>
        </li>
      </ul>
      <div className='flex justify-center'>
      <div
            className=" h-9 mt-5 w-[200px] rounded-md  flex justify-center items-center"
            style={{ background: "#5724E7" }}
          >
            <a href={Icons.Pdf} download="Resume.pdf">
              <button className="text-white font-medium w-[100px]" onClick={close}>Resume</button>
            </a>
          </div>
      </div>
     
    </div>
  );
};

export default Menu;
