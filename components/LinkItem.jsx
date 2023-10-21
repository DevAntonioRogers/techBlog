import Link from "next/link";
import clsx from "clsx";

const LinkItem = ({ route, label, isActive, footer }) => {
  return (
    <Link
      href={route}
      className={clsx(
        "px-3 py-1",
        isActive &&
          !footer &&
          "bg-sky-400 text-white rounded-md",
        footer &&
          isActive &&
          "text-sky-400 rounded-none bg-transparent link"
      )}
    >
      {label}
    </Link>
  );
};

export default LinkItem;
