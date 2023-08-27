"use client";

import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  // handle google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        // navigate(from, { replace: true });
        toast.success("Login successfully");
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
