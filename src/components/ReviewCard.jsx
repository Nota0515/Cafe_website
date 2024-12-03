import Rating from "./Rating"

const ReviewCard = ({src , name , discrpt , num , className }) => {
  return (
    <div className='flex-col bg-n-5 items-center rounded-lg gap-y-4 w-fit h-[7.563rem] shadow-lg flex-nowrap px-4 py-4'>
        <div className="flex flex-row w-fit justify-between">
            <div className="flex flex-row gap-3 items-center flex-nowrap">
                <div className="w-8 h-8 shrink-0 rounded-full bg-n-5 overflow-hidden" >
                    <img src={src} alt="customerImg" className="object-cover object-center" />
                </div>
                <div className="inline-block">
                    <span className="font-poppins text-n-1 text-base font-bold">{name}</span>
                </div>
            </div>
            <div className='flex flex-row'>
                <Rating num={num} className={className} />
            </div>
        </div>
        <div className="flex mt-1 flex-wrap leading-3 w-[13rem] h-auto">
            <span className=" text-xs font-poppins text-n-1 text-left">{discrpt}</span>
        </div>
    </div>
  )
}

export default ReviewCard