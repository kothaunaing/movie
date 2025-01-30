import { ChevronDownIcon } from "lucide-react";
import React from "react";

const Dropdown = ({ children, icon, text, className }) => {
  return (
    <div className={`relatvive group ${className}`}>
      <button className="flex items-center gap-1 p-2  rounded-lg hover:opacity-85 font-bold transition-colors ">
        {text && <span>{text}</span>}
        {icon && (
          <ChevronDownIcon className="size-5 group-hover:rotate-180 transition-transform duration-150" />
        )}
      </button>
      <div className="absolute top-[80%]  bg-black/70 rounded-md p-4 hidden group-hover:block backdrop-blur-lg">
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
