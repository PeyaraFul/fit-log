"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import logo from "../../public/asset/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  // console.log('pathname1', pathname)
  return (
    
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-4">
          <Image src={logo} alt="logo" width={25} height={24} priority />
          <h1>FITLOG</h1>
        </div>
        <div className="flex gap-4">
          <Link
            className={
              pathname === "/"
                ? "text-lime-400 bg-lime-900 rounded-2xl px-2"
                : ""
            }
            href="/"
          >
            Workouts
          </Link>
          <Link
            className={
              pathname === "/myPlan"
                ? "text-lime-400 bg-lime-900 rounded-2xl px-2"
                : ""
            }
            href="/myPlan"
          >
            My Plan
          </Link>
        </div>
        <div className="flex gap-4">
          <div>
            Plan <span className="bg-lime-400 px-2 py-1 rounded-full"> 0 </span>
          </div>
          <div>
            Saved <span> 0 </span>
          </div>
        </div>
      </div>
 
  );
};

export default Navbar;
