import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const PortfolioCategory = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1 className="my-5 text-2xl font-semibold text-[#53c28b]">
        {params.category}
      </h1>
      {/* post one */}
      <div className="md:flex gap-12 mt-10 mb-20 custom-row-reverse-class">
        {/* text content */}
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h2 className="text-4xl">Test</h2>
          <p className="text-xl">des</p>
          <Button text="See More" url="#" />
        </div>

        {/* image */}
        <div className="flex-1 relative h-[500px]">
          <Image
            src="https://images.pexels.com/photos/7853221/pexels-photo-7853221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            className="object-cover"
            alt="Portfolio"
          />
        </div>
      </div>

      {/* post two */}
      <div className="flex gap-12 mt-10 mb-20 custom-row-reverse-class">
        {/* text content */}
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h2>Test</h2>
          <p>des</p>
          <Button text="See More" url="#" />
        </div>

        {/* image */}
        <div className="flex-1 relative h-[500px]">
          <Image
            src="https://images.pexels.com/photos/7853221/pexels-photo-7853221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            className="object-cover"
            alt="Portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCategory;
