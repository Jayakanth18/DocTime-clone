import React from "react";
import image1 from "../assets/details-female.png";
import image2 from "../assets/details-male.png";

const Details = () => {
  return (
    <div className="h-[970px] w-full bg-blue-600 xl:mt-72 xl:h-[400px]">
      <h1 className="pt-8 text-center font-poppin font-bold text-white xl:pt-16 xl:text-4xl">
        Why every employee's health is important?
      </h1>
      <div className="mx-auto max-w-[1240px] pt-14 font-poppin text-white xl:flex">
        {/* 1 */}
        <div className="flex flex-col items-center xl:flex-row ">
          <img src={image1} alt="" />
          <p className="p-8 px-6 text-center text-[16px]">
            Employee health and well-being are one of the most important factors
            in maintaining workplace productivity and promoting the success of
            the organization. A healthy workforce is a more productive one,
            enabling higher growth and greater efficiency.
          </p>
        </div>
        {/* 2 */}
        <div className="flex flex-col items-center xl:flex-row">
          <img src={image2} alt="" />
          <p className="p-8 px-6 text-center text-[16px]">
            Employers should take care of employees' health so they can meet
            company goals. Effective healthcare programs help employees remain
            healthy and productive at work and enhance the organization's
            reputation as a good place to work.
          </p>
        </div>
      </div>
      {/* stats */}
      <div className="mx-auto flex max-w-[1240px] flex-col pt-8 text-center font-poppin text-[16px] lg:flex-row lg:pt-14">
        {/* 1 */}
        <p className="p-4">
          <span className="text-blue-600"> 76% of workers</span> struggle with
          physical well- being and an astonishing
          <span className="text-blue-600"> 85% are disengaged</span> from work.
        </p>
        {/* 2 */}
        <p className="p-4 ">
          WHO estimates that people lost productivity due to depression and
          anxiety costs the global economy
          <span className="text-blue-600"> &#36;1 Trillion USD.</span>
        </p>
        {/* 3 */}
        <p className="p-4 ">
          The adoption of telehealth providers by business increased by{" "}
          <span className="text-blue-600">340% in the last two years.</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
