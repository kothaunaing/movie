import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const Accordion = ({ text, children }) => {
  const [opened, setOpened] = useState(false);

  return (
    <li className="w-full flex flex-col justify-center">
      <button
        onClick={() => setOpened((prev) => !prev)}
        className="flex gap-1 text-center justify-center items-center"
      >
        <span className="font-bold text-xl">{text}</span>
        <ChevronDownIcon
          className={clsx("transition-transform", opened ? "rotate-180" : "")}
        />
      </button>
      {opened && <ul>{children}</ul>}
    </li>
  );
};

export default Accordion;
