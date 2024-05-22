import Image from "next/image";
import React from "react";
import backgroundImage from "/public/andras-unsplash.jpg";
export default function Features() {
  return (
    <div id="features" className="flex flex-col md:flex-row gap-8">
      <div
        className="flex flex-col items-center justify-end text-center"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          width: 250,
          height: 300,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "aliceblue",
          borderRadius: "2px",
        }}
      >
        <div className="card-bg h-full flex flex-col  pt-28  text-center">
          <h4 className=" card-text-bg m-0">Learn the Basics</h4>
          <div className="flex flex-col card-bg h-full pt-6 text-center items-center">
            <p className="card-text-bg m-0 w-3/4 ">
              8 week course on HTML, CSS, and Javascript
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-end text-center"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          width: 250,
          height: 300,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "aliceblue",
          borderRadius: "2px",
        }}
      >
        <div className="card-bg h-full flex flex-col  pt-28  text-center">
          <h4 className=" card-text-bg m-0">Front End Developer</h4>
          <div className="flex flex-col card-bg h-full pt-6 text-center items-center">
            <p className="card-text-bg m-0 w-3/4 ">
              24 Week Course covering the Basics + Front End Development
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-end text-center"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          width: 250,
          height: 300,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "aliceblue",
          borderRadius: "2px",
        }}
      >
        <div className="card-bg h-full flex flex-col  pt-28  text-center">
          <h4 className=" card-text-bg m-0">Full Stack Developer</h4>
          <div className="flex flex-col card-bg h-full pt-6 text-center items-center">
            <p className="card-text-bg m-0 w-3/4 ">
              36 Week Course covering the Basics + Front End + Back End Software
              Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
