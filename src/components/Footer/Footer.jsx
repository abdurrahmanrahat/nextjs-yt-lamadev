import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 flex items-center justify-between text-sm">
      <div>&copy;2023 AgencyCope. All rights reserved.</div>
      <div className="flex gap-3">
        <Image src="/1.png" width={17} height={17} className="opacity-70 cursor-pointer" alt="Facebook" />
        <Image src="/2.png" width={17} height={17} className="opacity-70 cursor-pointer" alt="Instagram" />
        <Image src="/3.png" width={17} height={17} className="opacity-70 cursor-pointer" alt="Twitter" />
        <Image src="/4.png" width={17} height={17} className="opacity-70 cursor-pointer" alt="Pinterest" />
      </div>
    </div>
  );
};

export default Footer;
