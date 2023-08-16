import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const ContactPageCom = () => {
  return (
    <div className="my-12">
      <h2 className="text-5xl font-semibold mb-20 text-center">
        Let&apos;s Keep in Tauch
      </h2>

      {/* form here */}
      <div className="md:flex items-center gap-24">
        {/* form image div */}
        <div className="flex-1 h-[500px] relative">
          <Image
            src="/contact.png"
            alt="Contact Img"
            fill={true}
            className=""
          />
        </div>

        {/* form input */}
        <form className="flex-1 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-transparent outline-none text-[#ddd] border-2 border-gray-300 text-xl font-semibold"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 bg-transparent outline-none text-[#ddd] border-2 border-gray-300 text-xl font-semibold"
          />
          <textarea
            name="massage"
            className="p-4 bg-transparent outline-none text-[#ddd] border-2 border-gray-300 text-xl font-semibold"
            placeholder="Your Massage"
            id=""
            cols="30"
            rows="6"
          ></textarea>

          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactPageCom;
