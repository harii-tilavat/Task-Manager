import React from "react";
import { Outlet } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">LOGIN PAGE</h1>
      <Outlet />
    </div>
  );
};

export default Login;
