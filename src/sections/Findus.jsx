import { FaMapMarkerAlt } from "react-icons/fa";
import {map , } from '../assets'

const Findus = () => {
  return (
    <div className="flex flex-col justify-center w-screen gap-y-14 px-14 py-14">
      <div className="flex justify-center items-center">
        <a href="" className="text-n-1 font-poppins text-3xl font-bold flex items-center gap-x-2">
          <span>findus</span>
          <FaMapMarkerAlt />
        </a>
      </div>
      <div className="flex shrink-0 border-2 border-n-7 rounded-xl overflow-hidden">
        <img src={map} className="w-full h-full content-center object-contain"/>
      </div>
    </div>
  );
};

export default Findus;
