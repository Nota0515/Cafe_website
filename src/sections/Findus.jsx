import { FaMapMarkerAlt } from "react-icons/fa";
import {map, saranaimg , } from '../assets';
import Button from "../components/Button";

const Findus = () => {
  return (
    <div className="flex flex-col justify-center items-center border-t-[1px] border-t-n-7 w-screen gap-y-5 md:gap-y-10 lg:gap-y-10  px-14 py-14">
      <div className="flex justify-center items-center">
        <a href="" className="text-n-1 font-poppins text-3xl font-bold flex">
          <span>findus</span>
          <FaMapMarkerAlt />
        </a>
      </div>
      <div className="flex relative shrink-0 max-w-[50rem] border-2 border-n-7 rounded-xl overflow-hidden hover-shadow">
        <div>
          <img src={map} className="w-full h-full content-center object-contain"/>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[20%] shadow-3xl rounded-lg overflow-hidden">
          <img src={saranaimg} alt="SarawanaDosagoogleMapImg" className="object-contain w-full h-full"/>
        </div>
      </div>
      <div className="w-[8rem] h-14 rounded-2xl overflow-hidden">
        <Button className='w-full h-full bg-n-3 text-2xl font-montserrat font-bold text-center text-n-2' href={"https://shorturl.at/TrLN1"}>Visit</Button>
      </div>
    </div>
  );
};

export default Findus;
