import React from "react";
import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className=" my-10">
      <h1 className="text-center text-xl font-semibold py-8">
        The best pizza.
        <br />

        <p className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </p>
      <p className=" py-8">Welcome start by your Name </p>
      <CreateUser/>
      </h1>
    </div>
  );
}

export default Home;