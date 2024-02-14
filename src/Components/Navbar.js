import React, { useState,useEffect } from "react";
import { Icons } from "../Assets";
import { useContextData } from "../Provider/Mode";
import { Moon } from "../Assets/Svg";
import { Link } from "react-scroll";
import Menu from "./Menu";
const Navbar = () => {
  const { setMode, mode } = useContextData();
  const [hamMenu , setHamMenu] = useState(false);

  useEffect(() => {
    if (hamMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [hamMenu]);
  const ToggleMenu =()=>{
    setHamMenu(prev=>!prev);
  }
  const close  =()=>{
    setHamMenu(false)
  }
  return (
    <>  
{hamMenu && < div className="overflow-hidden"><Menu close={close}  /></div>}
    <div className=" sticky px-6 md:px-0 flex  justify-between md:justify-around  items-center py-3 md:py-5  border-b ">
      <Link to="About" smooth={true} duration={100}>
        <img
          src={Icons.Logo}
          alt="logo"
          width={40}
          height={30}
          className="rounded-[20%]"
          style={{ background: mode ? "#786D94" : "" }}
        />
      </Link>
      <div className="flex md:hidden gap-5">
      <div
            onClick={() => {
              setMode((prev) => !prev);
            }}
          >
            <Moon mode={mode} dimesion={20}  />
          </div>
      <img src={hamMenu ? Icons.Close : Icons.ham} width={20} height={20} alt="ham" onClick={ToggleMenu} className="cursor-pointer" style={{filter : mode && "contrast(0.2)"}}/>
      </div>
      
     
      <div className=" hidden md:flex items-center gap-20">
        <ul
          className={`flex md:gap-5 lg:gap-10 list-none cursor-pointer ${
            mode ? "text-white" : "text-black"
          } text-base font-semibold `}
        >
          <li className="hover:text-blue-800">
            <Link to="About" smooth={true} duration={100}>
              {" "}
              About{" "}
            </Link>
          </li>
          <li className="hover:text-blue-800">
            {" "}
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
          <div
            onClick={() => {
              setMode((prev) => !prev);
            }}
          >
            <Moon mode={mode} dimesion={30} />
          </div>
        </ul>
        <div
          className="w-[100px] h-9 rounded-md  flex justify-center items-center"
          style={{ background: "#5724E7" }}
        >
          <a href={Icons.Pdf} download="Resume.pdf" >
          <button className="text-white font-medium">Resume</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
