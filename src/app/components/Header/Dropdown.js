import { ChevronDownIcon } from "lucide-react";
import React from "react";

const Dropdown = ({ children, icon, text, className }) => {
  return (
    <div className={`relatvive group ${className}`}>
      <button className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-lg hover:text-black font-bold transition-colors ">
        {text && <span>{text}</span>}
        {icon && (
          <ChevronDownIcon className="size-5 group-hover:rotate-180 transition-[transform] duration-150" />
        )}
      </button>
      <div className="absolute top-[80%] bg-slate-500/60 backdrop-blur-md rounded-md p-4 hidden group-hover:block">
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
