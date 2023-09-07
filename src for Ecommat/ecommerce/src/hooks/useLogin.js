import { useState } from 'react'
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';

const useLogin = (loginRequest) => {
  // create a state to handle your loading
  const [loading, setLoading] = useState(false);

  // this is coming from react-router-dom and it helps you navigate to different pages
  const navigate = useNavigate();

  // function to call our login auth API endpoint
  const onLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl + "auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: loginRequest.username,
          password: loginRequest.password,
        }),
      });
      const data = await response.json();
      sessionStorage.setItem("token", data.token)
      // setLoginResponse(data);
      setLoading(false);
      navigate("/home/dashboard", {
        replace: true,
        state: data
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    loading,
    onLogin
  }
};

export default useLogin