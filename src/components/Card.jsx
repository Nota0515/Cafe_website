

const Card = ({src , className , name , price , alt}) => {
  return (
    <div className="flex w-72 h-[25rem] md:w-72 md:h-[25rem] lg:w-[21.25rem] lg:h-[26.25rem] border-[1px] border-n-3 rounded-md">
      <div className="w-full h-[20rem] md:h-[20rem] lg:h-[21rem]  bg-red-400 rounded-t-[5px] overflow-hidden"></div>
      <div></div>
    </div>
  )
}

export default Card;