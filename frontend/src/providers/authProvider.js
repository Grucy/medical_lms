import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { isAxiosError } from "axios";
import { httpClient } from "../config/axiosConfig";

import { getAccessToken, setAccesstoken } from "../helper/Token";
import { useNavigate } from "react-router-dom";
import useAuthHttpClient from "../hooks/useAuthHttpClient";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  // const authHttpClient = useAuthHttpClient();

  // useEffect(() => {
  //   const getUserdetail = () => {
  //     authHttpClient
  //       .get("/user")
  //       .then((res) => setUser(res.data))
  //       .catch((e) => e);
  //   };
  //   getUserdetail();
  // }, [authHttpClient]);

  const navigate = useNavigate();
  const login = async ({ email, password }) => {
    let err = "";
    try {
      const { data } = await httpClient.post(
        "/auth/signin",
        { email, password },
      );
      setUser(data.user);
      setAccesstoken(data.user.token);
    } catch (error) {
      if (isAxiosError(error)) {
        err = error.response.data.error;
      } else {
        err = "Opps! Something Unexpected happens";
      }
    }
    return err;
  };
  const signup = async (signUpData) => {
    let err = "";
    try {
      const res = await httpClient.post("/auth/signup", signUpData);
      console.log(res);
    } catch (error) {
      if (isAxiosError(error)) {
        err = error;
      } else {
        err = "Opps! Something Unexpected happens";
      }
    }
    return err;
  };
  const signout = async () => {
    let err = "";
    try {
      await httpClient.get("/auth/signout");
      setUser(undefined);
      setAccesstoken("");
      navigate("/");
    } catch (error) {
      if (isAxiosError(error)) {
        err = error.response?.data.error.message;
      } else {
        err = "Opps! Something Unexpected happens";
      }
    }
    return err;
  };
  const forgotpassword = async (email) => {
    let err = "";
    try {
      await httpClient.post("/auth/forgotpassword", {
        email,
      });
    } catch (error) {
      if (isAxiosError(error)) {
        err = error.response?.data.error.message;
      } else {
        err = "Opps! Something Unexpected happens";
      }
    }
    return err;
  };
  const resetpassword = async (password, resetpasswordToken) => {
    let err = "";
    try {
      await httpClient.post(
        "/auth/resetpassword",
        {
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${resetpasswordToken}`,
          },
        }
      );
    } catch (error) {
      if (isAxiosError(error)) {
        err = error.response?.data.error.message;
      } else {
        err = "Opps! Something Unexpected happens";
      }
    }

    return err;
  };

  const value = {
    user,
    login,
    signup,
    signout,
    forgotpassword,
    resetpassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
