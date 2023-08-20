import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPageCom = () => {
  return (
    <div>
      {/* blog 01 */}
      <Link
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
          <h2 className="mb-2 text-4xl font-semibold">Test</h2>
          <p className="text-lg text-[#999]">desc</p>
        </div>
      </Link>

      {/* blog 02 */}
      <Link
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
          <h2 className="mb-2 text-4xl font-semibold">Test</h2>
          <p className="text-lg text-[#999]">desc</p>
        </div>
      </Link>

      {/* blog 03 */}
      <Link
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
          <h2 className="mb-2 text-4xl font-semibold">Test</h2>
          <p className="text-lg text-[#999]">desc</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPageCom;
