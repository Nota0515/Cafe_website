import {man1, man2,man3, toran, women1} from "../assets"
import ReviewCard from "../components/ReviewCard";

const Feedback = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row max-w-full justify-center mt-5 mx-5 gap-y-10 gap-x-16 lg:px-[170px] md:px-[84px] px-10 py-10 md:py-[30px] lg:py-[60px] bg-n-2">
      <div className="flex flex-col w-fit h-fit gap-y-16">
        <div className="mt-1"><span className="text-5xl font-poppins font-semibold ">Custumer Reviews</span></div>
        <div className="flex flex-row flex-wrap w-full h-full gap-y-10 gap-x-10 py-5">
          <ReviewCard 
           className="scale-75"
           name={"Kuro"} 
           src={man2} 
           discrpt={"i tried dli and medu vada, the quality of idli and vada is good,coconut chutney was also delicious"}        
           num={4.5}
          />
          <ReviewCard 
           className="scale-75"
           name={"ramayanaUncle"} 
           src={man3} 
           discrpt={"Great service and food love it totally ! everyone should try at once."}        
           num={5}
          />
          <ReviewCard 
           className="scale-75"
           name={"Ashwariya"} 
           src={women1} 
           discrpt={"food is  really worth for it's price. Food is very tasty I like it very much"}        
           num={4.5}
          />
        </div>
      </div>
      <div className="image relative shrink-0 max-w-[32.5rem] max-h-[30.75rem] overflow-hidden border-2 rounded-xl border-n-7 shadow-inner-darkest">
        <img className="" src={man1} />
        <div className=" absolute top-0 z-10 hover:drop-shadow-xl ">
         <img className="" src={toran} />
        </div>
      </div>
    </div>
  )
}

export default Feedback;