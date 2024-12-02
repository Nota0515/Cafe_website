import Rating from "./Rating"

const ReviewCard = ({src , name}) => {
  return (
    <div className="flex-col bg-n-5 items-center rounded-lg w-[16rem] h-[7.563rem] shadow-lg flex-nowrap px-4 py-4 ">
        <div className="flex flex-row w-[13rem] justify-between">
            <div className="flex flex-row gap-3 items-center flex-nowrap">
                <div className="w-8 h-8 rounded-full bg-n-5 overflow-hidden" >
                    <img src={src} alt="customerImg" className="object-cover object-center" />
                </div>
                <div className="inline-block">
                    <span className="font-poppins text-n-1 text-base">{name}</span>
                </div>
            </div>
            <div className="flex flex-row">
                <Rating />
            </div>
        </div>
    </div>
  )
}

export default ReviewCard