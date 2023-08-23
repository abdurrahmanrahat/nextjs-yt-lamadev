import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};
// fetch custom data

const PortfolioCategory = ({ params }) => {
  const data = getData(params.category);

  return (
    <div>
      <h1 className="my-5 text-2xl font-semibold text-[#53c28b]">
        {params.category}
      </h1>

      {data.map((item) => (
        <div
          key={item.id}
          className="md:flex gap-12 mt-10 mb-20 custom-row-reverse-class"
        >
          {/* text content */}
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h2 className="text-4xl">{item.title}</h2>
            <p className="text-xl">{item.desc}</p>
            <Button text="See More" url="#" />
          </div>

          {/* image */}
          <div className="flex-1 relative h-[500px]">
            <Image
              src={item.image}
              fill={true}
              className="object-cover"
              alt="Portfolio"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCategory;
