import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

function Landing() {
  return (
    <section
      className="sticky top-0 mx-auto flex h-screen items-center justify-between md:justify-around xl:justify-center xl:space-x-20 px-6
        "
    >
      {/* Landing Text */}
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block tracking-tight">Your Safety</span>
          <span className="block tracking-tight">Is Our</span>
          <span className="gradient block bg-clip-text text-transparent tracking-widest ">
            Priority
          </span>
        </h1>

        {/* Learn More */}
        <div>
          <div className="space-x-8">
            <Link href="/products/all">
              <Button title="Buy Now" />
            </Link>
            <Link href="/about" className="link">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Landing Image */}
      {/* <div
        className="relative hidden 
      transition-all duration-500 md:inline
      md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px]"
      >
        <Image
          src={landingImage}
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div> */}
    </section>
  );
}

export default Landing;
