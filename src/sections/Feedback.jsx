import {man1} from "../assets"

const Feedback = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row max-w-full justify-center mt-5 gap-x-16 lg:px-[170px] md:px-[84px] px-10 py-10 md:py-[30px] lg:py-[60px] bg-n-2">
      <div className="flex flex-col w-[32.5rem] h-[30.75rem] gap-y-16">
        <div className="mt-1"><span className="text-5xl font-poppins font-semibold ">Custumer Reviews</span></div>
        <div className="flex flex-row flex-wrap w-full h-full gap-y-10 gap-x-10 py-5"></div>
      </div>
      <div className="image w-[32.5rem] h-[30.75rem] overflow-hidden border-2 rounded-xl border-n-7 shadow-inner-darkest">
        <img className="" src={man1} />
      </div>
    </div>
  )
}

export default Feedback;