import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HomeLayout from "./product";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("showproduct");
  }, []);
  return (
    <div>
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    </div>
  );
};

export default Home;
