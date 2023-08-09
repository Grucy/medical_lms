import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/authProvider";
import { useState } from "react";

import { httpClient } from "../../config/axiosConfig";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  // const [open, setOpen] = useState(false);
  const [err, seterr] = useState({});
  // const sendVerficationmail = async (email) => {
  //   try {
  //     await httpClient.post("/auth/send-verification-mail", {
  //       email,
  //     });
  //     setOpen(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const err = await login({ email: email, password: password });
      if(err) console.log(err);
      if (err) {
        seterr(err);
        // if (err === "") {
        //   // sendVerficationmail(email);
        // }
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-8 shadow sm:rounded-lg sm:px-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="pb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6
                    ${
                      err?.email &&
                      "text-red-900 ring-red-300 placeholder:text-red-300"
                    }`}
                    value={email}
                    onChange={(e) => {
                      seterr({});
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                {err?.email && (
                  <p className="mt-2 text-sm text-red-600" id="email-error">
                    {err?.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    value={password}
                    onChange={(e) => {
                      seterr({});
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                {err?.password && (
                  <p className="mt-2 text-sm text-red-600" id="email-error">
                    {err.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <Link
                    to="#"
                    className="font-semibold text-primary-600 hover:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Link
                  to="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#4285F4] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 488 512"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                  <span className="text-sm font-semibold leading-6">
                    Google
                  </span>
                </Link>

                <Link
                  to="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#3B5998] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                  <span className="text-sm font-semibold leading-6">
                    Facebook
                  </span>
                </Link>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don’t have an account yet?{" "}
              <Link
                to="/auth/signup"
                className="font-semibold leading-6 text-primary-600 hover:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
