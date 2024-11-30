

const Card = ({src , className , name , price , alt}) => {
  return (
    <div className={`relative w-72 h-[25rem] md:w-72 md:h-[25rem] lg:w-[21.25rem] lg:h-[26.25rem] border-[1px] border-n-7 rounded-md overflow-hidden ${className || ''}`}>
      <div className="w-full h-[20rem] md:h-[20rem] lg:h-[21rem] rounded-t-[5px] shadow-inner-darkest overflow-hidden">
        <img src={src} className="w-full h-full object-cover object-center " alt={alt}/>
      </div>
      <div className="absolute bottom-0 w-full h-[6rem] py-6 px-2">
        <span className="text-n-3 text-xl font-montserrat font-thin">{name}</span><br></br>
        <span className="text-n-3 text-2xl font-montserrat font-normal" >Price: ₹{price}</span>
      </div>
    </div>
  )
}

export default Card;