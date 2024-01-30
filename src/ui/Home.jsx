import React from "react";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";
function Home() {
  const username = useSelector(state => state.user.username)
  return (
    <div className=" my-10 text-center sm:my-16 font-bold">
      <h1 className="mb-8 text-xl py-8 font-semibold">
        The best pizza.
        <br />

        <p className=" text-yellow-500 mb-8">
          Straight out of the oven, straight to you.
        </p>
      {/* <p className=" py-8">Welcome start by your Name </p> */}
      {username === '' ? <CreateUser/> : <Button to='/menu' type="primary" >Continue Ordering, {username}</Button>}
      </h1>
    </div>
  );
}

export default Home;