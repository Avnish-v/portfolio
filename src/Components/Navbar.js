import React from "react";
import { Icons } from "../Assets";
import { useContextData } from "../Provider/Mode";
import { Moon } from "../Assets/Svg";
const Navbar = () => {
  const { setMode, mode } = useContextData();
  return (
    <div className=" sticky flex justify-around  items-center py-5 bg-[#F3F5FA03] border-b ">
      <img src={Icons.Logo} alt="logo" width={40} height={30} />
      <div className="flex items-center gap-20">
        <ul className={`flex gap-10 list-none cursor-pointer ${mode?'text-white' :'text-black'} text-base font-semibold `}>
          <li className="hover:text-blue-800">About</li>
          <li className="hover:text-blue-800">Skills</li>
          <li className="hover:text-blue-800">Project</li>
          <li className="hover:text-blue-800">Experience</li>
          <li className="hover:text-blue-800">Contact</li>
          <div
            onClick={() => {
              setMode((prev) => !prev);
            }}
          >
            <Moon mode={mode} />
          </div>
        </ul>
        <div className="w-[100px] h-9 rounded-md  flex justify-center items-center" style={{background :"#5724E7"}}>
          <button className="text-white font-medium">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
