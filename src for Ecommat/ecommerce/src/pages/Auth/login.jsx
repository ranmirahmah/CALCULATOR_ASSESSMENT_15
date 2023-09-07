import React, { useEffect, useState } from 'react'
import BackgroundImage from "../../assets/images/bg-image.svg"
import useLogin from '../../hooks/useLogin';
import useSetRequest from '../../hooks/useSetRequest';

const Login = () => {
  // request payload for our login API 
  const [loginRequest, setLoginRequest] = useState({
    username: null,
    password: null
  });

  // check if a user is logged in back checking if you have a token in the session storage, if the user is logged in redirect them back to the dashbaord
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
     window.location.href = "/home/dashboard"
    }
  }, [])
  

  // importing our custom hooks here
const { onLogin, loading } = useLogin(loginRequest);
const { setRequest } = useSetRequest(setLoginRequest);


  // array to create different input field types
const InputDatas = [
  {
    type: "text",
    label: "Username",
  },
  {
    type: "password",
    label: "Password",
  },
];

  return (
    <div className="h-[100svh] grid grid-cols-2">
      <section className="flex items-center justify-center">
        <img src={BackgroundImage} alt="" />
      </section>
      <section className="flex items-center justify-center">
        <form
          onSubmit={(e) => onLogin(e.preventDefault())}
          className="flex flex-col gap-10 items-center justify-center"
        >
          {InputDatas.map((item, index) => (
            <div key={index} className="grid">
              <label htmlFor="">{item.label}</label>
              <input
                type={item.type}
                onChange={(e) =>
                  setRequest(e.target.value, item.label.toLowerCase())
                }
                className="outline-none border-2 border-[#000000] py-2 px-5 rounded-md"
              />
            </div>
          ))}
          <div>
            <button
              type="submit"
              className="bg-black text-white w-full rounded-md py-3 px-10 hover:scale-90 hover:transition-all"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login