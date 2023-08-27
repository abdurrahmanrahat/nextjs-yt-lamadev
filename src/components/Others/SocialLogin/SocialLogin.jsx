"use client";

import { AuthContext } from "@/context/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  // for redirect user after login
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace } = useRouter();

  // handle google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login successfully");
        replace(from);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline text-xl mt-2 mb-4 mr-4"
        >
          <FaGoogle />
        </button>
        <button className="btn btn-circle btn-outline text-xl mt-2 mb-4">
          <FaFacebook />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
