import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const AboutPageCom = () => {
  return (
    <div>
      {/* image with relative text */}
      <div className="w-full h-[300px] relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="AboutPage Img"
          className="object-cover grayscale"
          fill={true}
          //   width=""
          //   height=""
        />
        {/* relative text in image */}
        <div className="absolute bottom-5 left-5 bg-[#53c28b] p-2 text-white">
          <h2 className="text-4xl font-semibold">Digital Storytellers</h2>
          <h4 className="text-2xl">
            Handcrafting award winning digital experiences
          </h4>
        </div>
      </div>

      {/* some content */}
      <div className="md:flex gap-24 mt-12">
        {/* item 1 */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Who Are We?</h2>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>

        {/* item 2 */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">What We Do?</h2>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default AboutPageCom;
