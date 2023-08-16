import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const ContactPageCom = () => {
  return (
    <div>
      <h2>Let&apos;s Keep in Tauch</h2>

      {/* form here */}
      <div>
        {/* form image div */}
        <div>
          <Image
            src="/contact.png"
            alt="Contact Img"
            fill={true}
            className=""
          />
        </div>

        {/* form input */}
        <form>
          <input type="text" placeholder="Name" className="" />
          <input type="email" placeholder="Email" className="" />
          <textarea
            name="massage"
            className=""
            placeholder="Your Massage"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactPageCom;
