import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPageCom = async () => {
  const data = await getData();

  return (
    <div>
      {data.map((item) => (
        <Link
          key={item.id}
          href="/blog/testId"
          className="flex items-center gap-10 mb-10"
        >
          <div className="w-1/3 h-[380px] relative ">
            <Image
              src="https://images.pexels.com/photos/7853221/pexels-photo-7853221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill={true}
              className="object-cover"
              alt="BlogImg"
            />
          </div>
          <div className="w-2/3">
            <h2 className="mb-2 text-4xl font-semibold">{item.title}</h2>
            <p className="text-lg text-[#999]">desc</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPageCom;
