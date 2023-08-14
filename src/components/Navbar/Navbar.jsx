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
    <div className="container mx-auto">
      <Link href="/">
        <h2>logoHere</h2>
      </Link>
      <div>
        {navLinks.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
