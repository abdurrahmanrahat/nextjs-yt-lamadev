import Image from "next/image";
import BannerImg from "/public/hero.png";

const BannerSection = () => {
  return (
    <div>
      <div className="">
        <h2>Better design for your digital products</h2>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button>See Our Works</button>
      </div>
      <div>
        <Image src={BannerImg} width={500} height={500} alt="Hero Image" />
      </div>
    </div>
  );
};

export default BannerSection;
