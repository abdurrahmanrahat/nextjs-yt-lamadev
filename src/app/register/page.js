"use client";

import SocialLogin from "@/components/Others/SocialLogin/SocialLogin";
import { AuthContext } from "@/context/AuthProvider";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const RegisterPage = () => {
  const { mood } = useContext(ThemeContext);
  const { createUser } = useContext(AuthContext);

  // for redirect user after login
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    const name = data.name;
    const email = data.email;
    const password = data.password;
    // console.log(name, email, password);

    // User Create
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        toast.success("User created");
        replace(from);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:w-2/5 p-6 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign UP</h1>
          <p className="text-sm text-gray-400">Sign up as a new student</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                {...register("name", { required: true, maxLength: 80 })}
                className={`input input-bordered w-full p-2 bg-transparent rounded border-[1px] ${
                  mood == "light" ? "border-black" : "border-white"
                } `}
                data-temp-mail-org="0"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 text-xl">Provide your name</p>
              )}
            </div>

            {/* Photo Field */}
            {/* <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input file-input-bordered w-full max-w-xs"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-600 text-xl">Provide your Photo</p>
              )}
            </div> */}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true, maxLength: 80 })}
                className={`input input-bordered w-full p-2 bg-transparent rounded border-[1px] ${
                  mood == "light" ? "border-black" : "border-white"
                } `}
                data-temp-mail-org="0"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 text-xl">Provide your Email</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/,
                })}
                className={`input input-bordered w-full p-2 bg-transparent rounded border-[1px] ${
                  mood == "light" ? "border-black" : "border-white"
                } `}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 text-xl">Provide your Password</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase, lowercase & symbol
                </p>
              )}
            </div>
          </div>

          <div>
            <input
              className="bg-[#0B0016] w-full rounded-md py-3 text-white"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        {/* Social Signin Button */}
        <SocialLogin></SocialLogin>

        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
