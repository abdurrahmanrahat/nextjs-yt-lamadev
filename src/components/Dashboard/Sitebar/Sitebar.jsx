import Link from "next/link";

const Sitebar = () => {
  const navLinks = [
    { id: "01", title: "Add Product", url: "/dashboard/addproduct" },
    { id: "02", title: "All Prodcuts", url: "/dashboard/products" },
    { id: "03", title: "My Prodcuts", url: "/dashboard/myproducts" },
    { id: "04", title: "Home", url: "/" },
  ];

  return (
    <div className=" my-8">
      {/* <Link href="/">
        <h2 className="text-3xl font-bold">logoHere</h2>
      </Link> */}
      <div className="">
        {/* navlinks */}
        {navLinks.map((item) => (
          <Link key={item.id} href={item.url}>
            <li className="list-none font-semibold text-lg mt-2">{item.title}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sitebar;
