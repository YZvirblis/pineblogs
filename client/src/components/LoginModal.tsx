import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";

function LoginModal() {
  const [isRegister, setIsRegister] = useState(true);
  const [renderContent, setRenderContent] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    isRegister ? renderRegisterModal() : renderLoginModal();
  }, [isRegister, message]);

  const renderRegisterModal = () => {
    const contentToRender = (
      <form
        className="flex w-full md:flex-row flex-col"
        action="submit"
        onSubmit={(e) => submitForm(e)}
      >
        <div className="flex flex-col w-full p-3 my-3 text-left items-center justify-center bg-blue-200 rounded">
          <label className={labelStyle} htmlFor="username">
            Username
            <input
              required
              className={inputStyle}
              name="username"
              type="text"
            />
          </label>
          <label className={labelStyle} htmlFor="email">
            Email
            <input required className={inputStyle} name="email" type="email" />
          </label>
          <label className={labelStyle} htmlFor="password">
            Password
            <input
              required
              className={inputStyle}
              name="password"
              type="password"
            />
          </label>
          <label className={labelStyle} htmlFor="retypepass">
            Re-enter password
            <input
              required
              className={inputStyle}
              name="retypepass"
              type="password"
            />
          </label>
        </div>
        <div className="flex flex-col w-full  p-3 items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 rounded w-1/2 p-2 m-3 text-white"
          >
            Register
          </button>
          <span className="text-sm text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => {
                setIsRegister(false);
                setMessage("");
              }}
              className="text-blue-500 underline cursor-pointer"
            >
              Log In
            </span>
          </span>
          {message ? <span className="text-red-500">{message}</span> : null}
        </div>
      </form>
    );
    //@ts-ignore
    setRenderContent(contentToRender);
  };

  const renderLoginModal = () => {
    const contentToRender = (
      <form
        className="flex w-full md:flex-row flex-col"
        action="submit"
        onSubmit={(e) => submitForm(e)}
      >
        <div className="flex flex-col w-full p-3 my-3 text-left items-center justify-center bg-blue-200 rounded">
          <label className={labelStyle} htmlFor="email">
            Email
            <input className={inputStyle} name="email" type="email" />
          </label>
          <label className={labelStyle} htmlFor="password">
            Password
            <input className={inputStyle} name="password" type="password" />
          </label>
        </div>
        <div className="flex flex-col w-full  p-3 items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 rounded w-1/2 p-2 m-3 text-white"
          >
            Log In
          </button>
          <span className="text-sm text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setIsRegister(true);
                setMessage("");
              }}
              className="text-blue-500 underline cursor-pointer"
            >
              Register
            </span>
          </span>
          {message ? <span className="text-red-500">{message}</span> : null}
        </div>
      </form>
    );
    //@ts-ignore
    setRenderContent(contentToRender);
  };

  const labelStyle =
    "flex flex-col text-left justify-center items-left w-full my-2";
  const inputStyle = "rounded w-full p-1 m-1";

  const submitForm = async (e: FormEvent) => {
    //@ts-ignore
    const { username, email, password, retypepass } = e.target;
    e.preventDefault();
    if (isRegister) {
      if (password.value === retypepass.value) {
        try {
          const res = await axios.post("v1/users/register", {
            username: username.value,
            email: email.value,
            password: password.value,
          });
          console.log(res.data);
          setMessage("");
          setIsRegister(false);
        } catch (err: any) {
          setMessage(err.response.data);
        }
      } else {
        setMessage("Passwords do not match");
      }
    } else {
      try {
        const res = await axios.post("v1/users/login", {
          email: email.value,
          password: password.value,
        });
        localStorage.setItem("token", res.data);
        setMessage("");
      } catch (err: any) {
        setMessage(err.response.data);
      }
    }
  };
  return (
    <div className="md:w-1/2 w-full rounded flex align-center justify-center items-center text-center flex-col p-3 md:m-3">
      {renderContent}
    </div>
  );
}

export default LoginModal;
