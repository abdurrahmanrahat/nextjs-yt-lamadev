"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const AddProductPage = () => {
  const { mood } = useContext(ThemeContext);

  const { register, handleSubmit, reset } = useForm();

  // onsubmit function for react hook form
  const onSubmit = async (data) => {
    console.log(data);
    const { name, photo, email, price, description } = data;

    const productData = { productName: name, photo, userEmail: email, price, description };

    console.log(productData);
    // const response = await fetch("/api/product", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(productData),
    // });

    // if (response.ok) {
    //   // console.log("Product added successfully!!");
    //   refetch();
    //   toast.success("Product added successfully!");
    //   reset();
    // }
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold my-8">
        Add Your Product
      </h2>
      {/* Form For Admission */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* product Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Product name*</span>
            </label>
            <input
              type="text"
              placeholder="product name"
              {...register("name", { required: true, maxLength: 80 })}
              className={`input input-bordered w-full p-2 bg-transparent rounded border-[1px] ${
                mood == "light" ? "border-black" : "border-white"
              } `}
            />
          </div>

          {/* product Photo URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Product photo*</span>
            </label>
            <input
              type="text"
              placeholder="product url"
              {...register("photo", { required: true, maxLength: 80 })}
              className={`input input-bordered w-full p-2 bg-transparent rounded border-[1px] ${
                mood == "light" ? "border-black" : "border-white"
              } `}
            />
          </div>

          {/* Candidate Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Email*</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              {...register("email", { required: true, maxLength: 80 })}
              className={`input input-bordered w-full p-2 bg-transparent rounded border-[1px] ${
                mood == "light" ? "border-black" : "border-white"
              } `}
            />
          </div>

          {/* product price Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="text"
              placeholder="product price"
              {...register("price", { required: true, maxLength: 80 })}
              className={`input input-bordered w-full p-2 bg-transparent rounded border-[1px] ${
                mood == "light" ? "border-black" : "border-white"
              } `}
            />
          </div>
        </div>

        {/* product description Field */}
        <div className="form-control flex flex-col mt-6">
          <label className="label">
            <span className="label-text font-semibold">
              Product Description*
            </span>
          </label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="6"
            {...register("description", { required: true })}
            className={`bg-transparent border-[1px] rounded ${
              mood == "light" ? "border-black" : "border-white"
            } `}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center my-10">
          <input
            className="btn mt-4 uppercase bg-[#53c28b] hover:bg-black border-0  text-white font-medium rounded py-2 px-3"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
