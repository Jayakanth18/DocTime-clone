import image from "../assets/Banner/holding_phone.svg";
import download from "../assets/Banner/download.svg";
import star from "../assets/Banner/star.svg";
import waiting from "../assets/Banner/waiting.svg";
import stethoscope from "../assets/Banner/stethoscope.svg";

const Banner = () => {
  return (
    <div className="bg-blue-100">
      <div className="mx-auto max-w-[1240px]  font-poppin">
        <h1 className="p-6 text-center text-xl font-bold lg:text-3xl">
          DocTime is the number 1 digital healthcare service provider in
          Bangladesh*
        </h1>
        <div className="flex justify-between">
          {/* svg's */}
          <div className="items-center gap-10 font-semibold text-gray-700 lg:flex">
            {/* 1 */}
            <div className="flex flex-col items-center p-3">
              <div className="flex items-center">
                <img src={download} alt="" className="p-3" />
                <span className="text-center">1M</span>
              </div>
              <p className="text-center text-sm md:text-base">
                Download in google play store
              </p>
            </div>
            {/* 2 */}
            <div className="flex flex-col items-center p-3">
              <div className="flex items-center">
                <img src={star} alt="" className="p-3" />
                <span>4.8</span>
              </div>
              <p className="text-center text-sm md:text-base">
                Play Store ratings by over 10,000 users
              </p>
            </div>
            {/* 3 */}
            <div className="flex flex-col items-center p-3">
              <div className="flex items-center">
                <img src={waiting} alt="" className="p-3" />
                <span>1150</span>
              </div>
              <p className="text-center text-sm md:text-base">
                GPs and specialists verified by the BMDC
              </p>
            </div>
            {/* 4 */}
            <div className="flex flex-col items-center p-3">
              <div className="flex items-center">
                <img src={stethoscope} alt="" className="p-3" />
                <span>&lt;10 Mins</span>
              </div>
              <p className="text-center text-sm md:text-base">
                Average waiting time for GP consultations
              </p>
            </div>
            {/* terms and conditions */}
            <p className="px-7 py-6 text-center text-[11px] lg:hidden">
              *Based on the number of downloads and ratings in the google play
              store.
            </p>
          </div>
          {/* image */}
          <div className="hidden lg:block">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
