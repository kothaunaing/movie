const clsx = require("clsx");
const { default: Link } = require("next/link");

const ListItem = ({ text, path, active }) => {
  return (
    <li>
      <Link
        className={clsx(
          "flex items-center gap-1 p-2  duration-150 transition-colors cursor-pointer justify-center border-b-2 ",
          active
            ? " border-b-blue-800"
            : "hover:border-b-blue-800 border-b-transparent "
        )}
        href={path}
      >
        {text}
      </Link>
    </li>
  );
};

export default ListItem;
