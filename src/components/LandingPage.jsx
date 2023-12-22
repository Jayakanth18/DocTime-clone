import React from "react";
import image from "../assets/discussion.jpg";

const LandingPage = () => {
  return (
    <>
      {/* image */}
      <div className="max-w[1240px] m-auto flex justify-end sm:relative md:relative">
        <img
          src={image}
          alt="image"
          className="hidden h-[60vh] object-cover md:block "
        />
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-col items-center md:absolute md:left-32 md:top-60 xl:absolute xl:left-0 xl:top-40 2xl:absolute 2xl:left-[600px] 2xl:top-60">
        <p className="px-7 pt-4 font-poppin text-[21px] font-bold sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-[52px] 2xl:leading-[55px]">
          Increase the productivity <br className="hidden md:block" />
          and motivation of{" "}
          <span className="pl-0 sm:block sm:pl-32 lg:inline-block lg:pl-0">
            your employees.
          </span>
        </p>
        <p className="px-5 pt-4 font-poppin text-[14px] font-semibold sm:text-[16px] sm:font-medium md:absolute md:left-2 md:top-32 md:text-[16px] xl:absolute xl:top-28 2xl:absolute 2xl:top-36 2xl:text-[17px]">
          <span className="pl-2 sm:pl-0 md:pl-0">
            Empowering employees with 24/7 access to{" "}
          </span>
          quality healthcare <br className="hidden md:block" />
          service,{" "}
          <span className="sm:block sm:pl-40 lg:inline-block lg:pl-0">
            anytime, anywhere.
          </span>
        </p>
        <p className="left-1 top-52 px-6 pt-4 font-poppin text-[14px] font-normal sm:text-[16px] md:absolute md:text-[19px] xl:absolute xl:top-48 xl:text-[16px] 2xl:absolute 2xl:top-56">
          Complete healthcare solution for your employee{" "}
          <br className="sm:hidden md:hidden " />
          <span className="pl-24 sm:pl-0 md:pl-0">and their family.</span>
        </p>
        <button className="float-right rounded-full bg-blue-500 px-8 py-3 text-[22px] font-medium text-white md:absolute md:left-7 md:top-72 xl:absolute xl:top-64 2xl:top-72 2xl:px-12 2xl:py-4">
          Get in touch &rarr;
        </button>
      </div>
    </>
  );
};

export default LandingPage;
