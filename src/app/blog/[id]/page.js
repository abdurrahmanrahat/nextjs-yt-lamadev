import Image from "next/image";
import React from "react";

const BlogPost = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">Title</h1>
          <p className="text-lg font-light">Description</p>
          <div className="flex items-center gap-3">
            <Image
              src="https://images.pexels.com/photos/7853221/pexels-photo-7853221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className="object-cover rounded-[50%]"
            />
            <span className="">UserName</span>
          </div>
        </div>
        <div className="flex-1 h-[300px] relative">
          <Image
            src="https://images.pexels.com/photos/7853221/pexels-photo-7853221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-12 text-xl font-light text-[#999] text-justify">
        <p className="">Lorem content</p>
      </div>
    </div>
  );
};

export default BlogPost;
