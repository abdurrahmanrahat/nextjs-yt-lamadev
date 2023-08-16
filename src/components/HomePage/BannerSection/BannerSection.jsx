import Image from "next/image";
import BannerImg from "/public/hero.png";
import Button from "@/components/Button/Button";

const BannerSection = () => {
  return (
    <div className="md:flex items-center gap-24 my-16">
      <div className="flex-1 flex flex-col gap-12">
        <h2 className="special-style text-5xl md:text-6xl font-bold bg-gradient-to-b from-[#194c33] to-[#ddd] bg-clip-text text-transparent">
          Better design <br /> for your digital products
        </h2>
        <p className="text-2xl font-light">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
        {/* <button className="p-4 cursor-pointer bg-[#53c28b] border-none rounded w-max text-white text-lg">See Our Works</button> */}
      </div>
      <div className="flex-1">
        <Image
          className="w-[100%] h-[500px] object-contain img-home-animation"
          src={BannerImg}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default BannerSection;
