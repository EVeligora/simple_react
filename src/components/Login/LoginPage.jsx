import { Navigate } from "react-router";
import { setToken } from "../../util/authToken";
import React, { useState } from 'react';

const Login = () => {
  const [auth, setAuth] = useState(0);

  function onEnterClick(e) {
    e.preventDefault();
    setToken();
    setAuth(1);

  }

  return (
    <>
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Simple App</h1>
        <p className="col-lg-10 fs-4">Login Form</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={onEnterClick} >Login</button>
          {auth === 1 && <Navigate to="/companies" />}
        </form>
      </div>
    </>
  );
};

export default Login;

