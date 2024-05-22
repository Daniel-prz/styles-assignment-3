import React from "react";
import Link from "next/link";
import Features from "./Features";
export default function Hero() {
  return (
    <div className=" flex flex-col items-center w-full">
      <h2>Welcome</h2>
      <p className="text-lg">Find your new path to success</p>
      <p className="text-lg">See our selection of courses</p>
      <div className=" flex flex-col items-center hero-bg w-full pb-6">
        <Link className="text-2xl link-color" href={"#features"}>
          Get Started
        </Link>
        <Features />
        <p>or</p>
        <Link className="text-xl link-color" href={"/"}>
          Find out more...
        </Link>
      </div>
    </div>
  );
}
