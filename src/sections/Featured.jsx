import { feature1 } from "../assets";
import MenuItems from "../components/MenuItems";

const Feature = () => {
  return (
    <div className="flex w-full max-h-[781.65px] gap-y-[60px] px-[170px] py-[60px] flex-col bg-n-2">
      <div className="flex flex-row gap-x-[60px]">
        <div className="storeimage  w-[181.65px] h-[181.65px]">
          <img src={feature1} alt="storeImage" />
        </div>
        <div className="flex-col flex w-[53.625rem] min-h-[159px] gap-y-[24px]">
          <div className="w-[109px] h-[87px] rounded-xl mt-2 bg-n-6 "></div>
          <div>
            <span className="text-n-3 font-poppins text-4xl font-semibold">Features Dishes</span>
          </div>
        </div>
      </div>
      <div className="featuredishes flex gap-5 max-w-[68.75rem] max-h-[26.25rem]">
        <MenuItems />
        <MenuItems />
        <MenuItems />
      </div>
    </div>
  )
}

export default Feature;