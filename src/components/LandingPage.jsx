import React from "react";
import image from "../assets/discussion.jpg";
import boost from "../assets/boost.png";
import improve from "../assets/improve.png";
import monitor from "../assets/monitor.png";
import reduce from "../assets/reduce.png";

const LandingPage = () => {
  return (
    <>
      {/* image */}
      <div className="max-w[1240px] mx-auto flex justify-end sm:relative md:relative">
        <img
          src={image}
          alt="image"
          className="hidden h-[60vh] object-contain md:block 2xl:h-[63vh] 2xl:w-[85vw] "
        />
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-col items-center md:absolute md:left-32 md:top-60 xl:absolute xl:left-0 xl:top-40 2xl:absolute 2xl:left-[600px] 2xl:top-60">
        <p className="px-7 pt-4 font-poppin text-[24px] font-bold leading-8 sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-[52px] 2xl:leading-[55px]">
          Increase the productivity <br className="sm:block" />
          and motivation of{" "}
          <span className="inli pl-0 sm:block sm:pl-32 lg:inline-block lg:pl-0">
            your <span className="pl-20 sm:pl-0">employees.</span>
          </span>
        </p>
        <p className="px-5 pt-4 font-poppin text-[14px] font-semibold sm:text-[16px] sm:font-medium md:absolute md:left-2 md:top-32 md:text-[16px] xl:absolute xl:top-28 2xl:absolute 2xl:top-36 2xl:text-[17px]">
          <span className="pl- sm:pl-0 md:pl-0">
            Empowering employees with 24/7 access
            <span className=" pl-2 sm:pl-0"></span>
          </span>
          to{" "}
          <span className="pl-14 sm:pl-0">
            quality healthcare <br className="hidden md:block" />
            service,{" "}
          </span>
          <span className="pl-[75px] sm:block sm:pl-40 lg:inline-block lg:pl-0">
            anytime, anywhere.
          </span>
        </p>
        <p className="left-1 top-52 px-6 pt-4 font-poppin text-[14px] font-normal sm:text-[16px] md:absolute md:text-[19px] xl:absolute xl:top-48 xl:text-[16px] 2xl:absolute 2xl:top-56">
          Complete healthcare solution for your{" "}
          <span className="pl-10 sm:pl-0">
            {" "}
            employee <br className="hidden sm:hidden md:hidden" />
            <span className=" sm:pl-0 md:pl-0">and their family.</span>
          </span>
        </p>
        <button className="float-right my-5 rounded-full bg-blue-500 px-10 py-4 text-[22px] font-medium text-white sm:my-0 md:absolute md:left-7 md:top-72 xl:absolute xl:top-64 2xl:top-72 2xl:px-12 2xl:py-4">
          Get in touch &rarr;
        </button>
      </div>
      {/* grid */}
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 font-poppin text-base font-medium md:absolute md:top-[500px] md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:text-base 2xl:left-[650px] 2xl:top-[650px] 2xl:text-lg 2xl:pt-10">
        <div className="flex flex-col items-center p-2 text-center">
          <img src={boost} alt="" />
          <p className="p-6">
            Boost productivity and performance{" "}
            <span className="pl-4 md:pl-0">
              {" "}
              through mental health support{" "}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center p-2 text-center">
          <img src={monitor} alt="" />
          <p className="p-6 ">Monitor employees wellbeing proactively</p>
        </div>
        <div className="flex flex-col items-center p-2 text-center">
          <img src={improve} alt="" />
          <p className="p-6">Improve retention and attract new talents</p>
        </div>
        <div className="flex flex-col items-center p-2 text-center">
          <img src={reduce} alt="" />

          <p className="p-6">Reduce absenteeism and boost morale</p>
        </div>{" "}
      </div>
    </>
  );
};

export default LandingPage;
