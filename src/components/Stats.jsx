import image from "../assets/stats/display.svg";
import { TiTick } from "react-icons/ti";
const Stats = () => {
  return (
    <div className="m-auto max-w-[1240px] px-4 py-6 font-poppin md:flex">
      {/* 1 */}
      <div className="px-7 text-center lg:pt-10 lg:text-left">
        <p className="text-blue-400 lg:text-2xl">Our smiley tool helps HR to</p>
        <h1 className="text-2xl font-bold lg:pt-6 lg:text-4xl">
          Monitor employees' well-being
        </h1>
        <p className="pt-8 text-lg lg:pt-10 lg:text-2xl">
          Example of employees' well-being data - January 2023
        </p>
        {/* smiley animation here */}
      </div>
      {/* 2 */}
      <div>
        <img src={image} className="rounded-xl drop-shadow-2xl" />
        <p className="pt-4 text-blue-400 lg:text-lg">Dashboard for HR</p>
        <p className="pb-7 text-lg font-semibold lg:text-2xl">
          Empowering HR to monitor employees' health and well-being.
        </p>
        <ol>
          <div>
            <TiTick className="inline text-blue-500" />{" "}
            <li className="inline">Track DocTime usage by employee</li>
          </div>
          <div>
            <TiTick className="inline text-blue-500" />{" "}
            <li className="inline">Total number of diagnostic order taken</li>
          </div>
          <div>
            <TiTick className="inline text-blue-500" />{" "}
            <li className="inline">Total number of medicine order online</li>
          </div>
          <div>
            <TiTick className="inline text-blue-500" />{" "}
            <li className="inline">Total number of active users.</li>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Stats;
