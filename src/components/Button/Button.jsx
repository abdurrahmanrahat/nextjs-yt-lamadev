import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="px-4 py-3 cursor-pointer bg-[#53c28b] border-none rounded w-max text-white text-lg">{text}</button>
    </Link>
  );
};

export default Button;
