import Link from "next/link";

const PortfolioPageCom = () => {
  return (
    <div>
      <h1 className="my-5 text-2xl font-semibold">Choose a Gallery</h1>
      <div className="flex gap-12">
        {/*  */}
        <Link
          href="/portfolio/illustrations"
          className="border-2 border-[#bbb] border-solid rounded w-[300px] h-[400px] relative bg-cover bg-[url('/illustration.png')]"
        >
          <span className="absolute bottom-2 right-2 text-3xl font-bold hover:text-[#53c28b]">
            Illustrations
          </span>
        </Link>

        {/*  */}
        <Link
          href="/portfolio/websites"
          className="border-2 border-[#bbb] border-solid rounded w-[300px] h-[400px] relative bg-cover bg-[url('/websites.jpg')]"
        >
          <span className="absolute bottom-2 right-2 text-3xl font-bold hover:text-[#53c28b]">
            Websites
          </span>
        </Link>

        {/*  */}
        <Link
          href="/portfolio/application"
          className="border-2 border-[#bbb] border-solid rounded w-[300px] h-[400px] relative bg-cover bg-[url('/apps.jpg')]"
        >
          <span className="absolute bottom-2 right-2 text-3xl font-bold hover:text-[#53c28b]">
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPageCom;
