import amber from "../assets/clients_logo/amber_it.png";
import atova from "../assets/clients_logo/atova.png";
import bdde from "../assets/clients_logo/bdde.png";
import block_solutions from "../assets/clients_logo/block_solutions.png";
import codemen from "../assets/clients_logo/codemen.png";
import dewan_ict from "../assets/clients_logo/dewan_ict.png";
import fashol from "../assets/clients_logo/fashol.png";
import ideaxen from "../assets/clients_logo/ideaxen.png";
import idyllic from "../assets/clients_logo/idyllic.png";
import infocart from "../assets/clients_logo/infocart.png";
import jarvishub from "../assets/clients_logo/jarvishub.png";
import marn from "../assets/clients_logo/marn.png";
import media365 from "../assets/clients_logo/media365.png";
import nedaer from "../assets/clients_logo/nedaer.png";
import qtec from "../assets/clients_logo/qtec.png";
import sagar from "../assets/clients_logo/sagar.png";
import siam from "../assets/clients_logo/siam.png";
import bridge from "../assets/clients_logo/bridge.png";

export const Clients = () => {
  return (
    <>
      <div className="mx-auto max-w-[1240px] font-poppin">
        <h1 className="px-3 pt-10 font-bold xl:text-3xl">
          Some of oru clients
        </h1>
        {/* images */}
        <div className="grid grid-cols-2  p-5 md:p-6 lg:p-7 xl:grid-cols-6 xl:p-8">
          <img src={amber} className="h-28 border border-gray-100 p-5" />
          <img src={fashol} className="h-28 border border-gray-100 p-5" />
          <img src={sagar} className="h-28 border border-gray-100 p-5" />
          <img src={marn} className="h-28 border border-gray-100 p-5" />
          <img src={bdde} className="h-28 border border-gray-100  p-5" />
          <img src={media365} className="h-28 border border-gray-100  p-5" />
          <img src={infocart} className="h-28 border border-gray-100  p-5" />
          <img src={dewan_ict} className="h-28 border border-gray-100  p-5" />
          <img src={siam} className="h-28 border border-gray-100  p-5" />
          <img src={qtec} className="h-28 border border-gray-100  p-5" />
          <img src={atova} className="h-28 border border-gray-100  p-5" />
          <img src={nedaer} className="h-28 border border-gray-100  p-5" />
          <img src={codemen} className="h-28 border border-gray-100  p-5" />
          <img
            src={block_solutions}
            className="h-28 border border-gray-100  p-5"
          />
          <img src={jarvishub} className="h-28 border border-gray-100  p-5" />
          <img src={ideaxen} className="h-28 border border-gray-100  p-5" />
          <img src={idyllic} className="h-28 border border-gray-100  p-5" />
          <img src={bridge} className="h-28 border border-gray-100  p-5" />
        </div>
      </div>
    </>
  );
};
