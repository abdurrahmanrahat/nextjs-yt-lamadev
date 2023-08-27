"use client";

import Link from "next/link";
import DarkMoodToggle from "../DarkMoodToggle/DarkMoodToggle";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";

const navLinks = [
  { id: "01", title: "Home", url: "/" },
  { id: "02", title: "Portfolio", url: "/portfolio" },
  { id: "03", title: "Blog", url: "/blog" },
  { id: "04", title: "About", url: "/about" },
  { id: "05", title: "Contact", url: "/contact" },
  { id: "06", title: "Post", url: "/post" },
  { id: "07", title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // handleLogout
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((e) => console.log(e));
  };

  return (
    <div className="h-20 flex justify-between items-center">
      <Link href="/">
        <h2 className="text-3xl font-bold">logoHere</h2>
      </Link>
      <div className="flex items-center gap-4 md:ml-48">
        {/* dark toggle theme */}
        <DarkMoodToggle></DarkMoodToggle>

        {/* navlinks */}
        {navLinks.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
      {user ? (
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-[#53c28b] hover:bg-transparent hover:border-2 hover:border-[#53c28b] ease-out duration-300 cursor-pointer rounded font-semibold"
        >
          Logout
        </button>
      ) : (
        <Link href="/login">
          <button className="py-2 px-4 bg-[#53c28b] hover:bg-transparent hover:border-2 hover:border-[#53c28b] ease-out duration-300 cursor-pointer rounded font-semibold">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
