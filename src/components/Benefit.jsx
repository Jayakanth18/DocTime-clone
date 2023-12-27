import React from "react";

import clock from "../assets/Benefit_page/clock.svg";
import health from "../assets/Benefit_page/health_insurance_benefits.svg";
// import phone from "../assets/Benefit_page/holding_phone.svg";
import medicine from "../assets/Benefit_page/medicine_delivery.svg";
import health_record from "../assets/Benefit_page/personal_health_recordhealth.svg";
import personalized_health from "../assets/Benefit_page/personalized_health.svg";
import collection from "../assets/Benefit_page/sample_collections.svg";
import doctor_book from "../assets/Benefit_page/specialist_doctor_book.svg";
import video_call from "../assets/Benefit_page/video_call.svg";

const Benefit = () => {
  return (
    <div className="mx-auto mt-[400px] max-w-[1240px] text-center font-poppin text-[18px] md:mt-40">
      <h1 className="p-4 text-2xl font-bold lg:text-4xl">
        Benefits for your employee and their family
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* 1 */}
        <div className="flex flex-col p-5">
          <img src={clock} alt="" className="h-16" />
          <p className="p-4">Get connected to a doctor within IO minutes</p>
        </div>
        {/* 2 */}
        <div className="flex flex-col p-5">
          <img src={health} alt="" className="h-16" />
          <p className="p-4">
            Health insurance benefits with IPD & OPD coverage
          </p>
        </div>
        {/* 3 */}
        <div className="flex flex-col p-5">
          <img src={video_call} alt="" className="h-16" />
          <p className="p-4">
            Free unlimited video consultations with experienced GP, Child & Gyne
            doctors
          </p>
        </div>
        {/* 4 */}
        <div className="flex flex-col p-5">
          <img src={medicine} alt="" className="h-16" />
          <p className="p-4">Up to 10% discount on medicine orders</p>
        </div>
        {/* 5 */}
        <div className="flex flex-col p-5">
          <img src={health_record} alt="" className="h-16" />
          <p className="p-4">
            Electronic health records for employees & their families
          </p>
        </div>
        {/* 6 */}
        <div className="flex flex-col p-5">
          <img src={personalized_health} alt="" className="h-16" />
          <p className="p-4">
            Personalized health card, get discounts at 200 hospitals
          </p>
        </div>
        {/* 7 */}
        <div className="flex flex-col p-5">
          <img src={collection} alt="" className="h-16" />
          <p className="p-4">Up to 40% discount on home diagnostic tests</p>
        </div>
        {/* 8 */}
        <div className="flex flex-col p-5">
          <img src={doctor_book} alt="" className="h-16" />
          <p className="p-4">
            Book an appointment & get consultation from top specialists
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
