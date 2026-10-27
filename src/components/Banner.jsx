import Image from "next/image";
import React from "react";
import BannerPic from "../../public/asset/banner.png";

const Banner = () => {
  return (
    <div className="sm:block  md:flex justify-between gap-40 p-4 px-10 mx-auto">
      <div>
        <p className="text-lime-400">WORKOUT LIBRARY</p>
        <h1 className="text-5xl font-bold">
          TRAIN WITH INTENT. LOG <br />
          EVERY SET.
        </h1>
        <p>
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />  into today's plan, and watch the week's work add up.
        </p>
        <button className="bg-lime-400 text-black rounded-lg px-4 py-2 mt-4">Browse Workouts</button>
      </div>
      <Image className=" sm:block mx-auto sm:mt-10" src={BannerPic} width={300} height={300} alt="Banner Pic" />
    </div>
  );
};

export default Banner;
