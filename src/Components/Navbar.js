import React from "react";
import { Icons } from "../Assets";
import { useContextData } from "../Provider/Mode";
import { Moon } from "../Assets/Svg";
import { Link } from "react-scroll";
const Navbar = () => {
  const { setMode, mode } = useContextData();
  return (
    <div className=" sticky flex justify-around  items-center py-5  border-b ">
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
      <div className="flex items-center gap-20">
        <ul
          className={`flex gap-10 list-none cursor-pointer ${
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
            <Moon mode={mode} />
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
  );
};

export default Navbar;
