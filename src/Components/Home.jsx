import { Link } from "react-router-dom";
 
import React from "react";
 import CartOverview from "./CartOverview";

const Header = () => {
  return (
    <header className=" flex item-center container mx-auto bg-yellow-500 px-4 py-3 justify-between"  >
            Fast React Pizza co.
          <br />
          <input type="text" alt="search order #" className="rounded m-3"  />
       
    </header>
  );
};

function Home() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <h1 className="text-center text-xl font-semibold py-8">
        The best pizza.
        <br />

        <p className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </p>
      <p className=" py-8">Welcome start by your Name </p>
      <input type="text" placeholder="your name" className=" " />
      </h1>
      
      <CartOverview/>
    </div>
  );
}

export default Home;