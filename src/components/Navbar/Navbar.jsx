import Link from "next/link";
import React from "react";

const navLinks = [
  { id: "01", title: "Home", url: "/" },
  { id: "02", title: "Portfolio", url: "/portfolio" },
  { id: "03", title: "Blog", url: "/blog" },
  { id: "04", title: "About", url: "/about" },
  { id: "05", title: "Contact", url: "/contact" },
  { id: "06", title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  return (
    <div className="h-20 flex justify-between items-center">
      <Link href="/">
        <h2 className="text-3xl font-bold">logoHere</h2>
      </Link>
      <div className="flex items-center gap-4">
        {navLinks.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
      <button className="py-2 px-4 border-none bg-[#53c28b] text-white cursor-pointer rounded">Logout</button>
    </div>
  );
};

export default Navbar;
