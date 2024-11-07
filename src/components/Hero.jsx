import { heroimages } from "../constants";


const Hero = () => {
  return (
    <div className="relative mt-4 mx-10 w-[75rem] left-1/2 h-10 -translate-x-1/2 top-20 p-5">
      <div className="absolute mx-auto flex justify-center items-center overflow-hidden">
        {heroimages.map((item)=>(
          <div key={item.id} className="flex justify-center items-center m-2 px-4 py-4">
            <img src={item.Image} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero;