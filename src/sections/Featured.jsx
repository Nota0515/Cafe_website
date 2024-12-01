import { feature1,} from "../assets";

const Feature = () => {
  return (
    <div className="flex justify-center max-w-full max-h-[781.65px] gap-y-[60px] px-10 py-10 md:px-[84px] md:py-[30px] lg:px-[170px] lg:py-[60px] flex-col bg-n-2">
      <div className="flex flex-col md:flex-row gap-x-[60px]">
        <div className="storeimage shrink-0 w-[181.65px] rounded-xl overflow-hidden h-[181.65px]">
          <img src={feature1} alt="storeImage" />
        </div>
        <div className="flex-col flex w-full min-h-[159px] gap-y-[24px]">
          <div className="w-[109px] h-[87px] rounded-xl mt-10 bg-n-6 "></div>
          <div>
            <span className="text-n-3 font-poppins text-4xl font-semibold">Features Dishes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature;