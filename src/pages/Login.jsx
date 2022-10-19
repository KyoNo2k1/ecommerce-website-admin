import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (values.email === "avion" && values.password === "avion") {
      setUser(values);
    }
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center">
      <div className="my-auto">
        <div className="p-3 border-black">
          <h1 className="font-satoshi font-bold flex justify-center p-5">
            Login
          </h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col">
              <label className="font-bold mb-2">Email Address</label>
              <div className="control">
                <input
                  autoComplete="off"
                  className="border-2"
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  value={values.email || ""}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-bold mb-2">Password</label>
              <div className="control">
                <input
                  className="border-2"
                  type="password"
                  name="password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  value={values.password || ""}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="hover:bg-primary hover:text-white border-2 w-full p-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
