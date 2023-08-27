"use client";

import SocialLogin from "@/components/Others/SocialLogin/SocialLogin";
import { AuthContext } from "@/context/AuthProvider";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const { mood } = useContext(ThemeContext);
  const { signIn } = useContext(AuthContext);

  // for redirect user after login
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace } = useRouter();

  // handle SignIN
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // sign in user
    signIn(email, password)
      .then(() => {
        // const user = result.user;
        // console.log(user);
        toast.success("Login successfully", {
          position: "top-center",
        });
        replace(from);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>

        <form
          onSubmit={handleSignIn}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                // className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0B0016]"
                className={`input input-bordered w-full p-2 bg-transparent rounded border-[1px] ${
                  mood == "light" ? "border-black" : "border-white"
                } `}
                data-temp-mail-org="0"
                required
              />
            </div>

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
                // className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0B0016]"
                className={`input input-bordered w-full p-2 bg-transparent rounded border-[1px] ${
                  mood == "light" ? "border-black" : "border-white"
                } `}
              />
            </div>
          </div>

          <div>
            <input
              className="bg-[#0B0016] w-full rounded-md py-3 text-white"
              type="submit"
              value="Login"
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
          Do not have an account yet?{" "}
          <Link
            href="/register"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
