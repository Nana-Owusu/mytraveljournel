import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="bg-[#F55A5A]  max-w-screen-lg mx-auto flex justify-center items-center py-6 space-x-5">
          <div>
            <img src="/images/Fill 213.png" />
          </div>
          <div>
            <h1 className="text-xl text-white">my travel journal.</h1>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
