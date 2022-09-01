import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "https://zelenyi.herokuapp.com/api/v1";

const AuthContextProvider = ({ children }) => {
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(Object.values(error.response.data).flat(2)[0]);
      console.log(error);
      setError(Object.values(error.response.data).flat(2)[0]);
      //   setError(Object.values(err.response.data).flat(2));
    }
  };

  const login = async (formData, email) => {
    try {
      const res = await axios.post(`${API}/account/api/token/`, formData);

      console.log(res.data);

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);

      setUserName(username);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log([error.response.data]);
      // setError("Wrong username or password");
      setError([error.response.data.detail]);
    }
  };

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}/account/token/refresh/`,
        {
          refresh: token.refresh,
        },
        { headers: { Authorization } }
      );

      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );

      let username = localStorage.getItem("username");
      setUserName(username);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUserName("");
    navigate("/login");
  }
  return (
    <authContext.Provider
      value={{ register, login, checkAuth, logout, error, setError, username }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
