import { anna } from '../assets';
import Button from '../components/Button';

const Hero = () => {
  return (
    <div className='flex w-full h-[13.75rem] px-10 md:px-20  lg:px-[10.625rem] py-[3.75rem] md:gap-10 gap-6 items-center bg-n-5 sm:justify-evenly'>
      <div className="anna w-[100px] h-[100px] flex-shrink-0">
        <img src={anna} width={100} height={100} alt='anna' className='rounded-full' />
      </div>
      <div className='hidden md:flex min-w-[10rem] h-[6.25rem] leading-3 flex-wrap'>
        <span className='text-sm md:text-2xl font-poppins font-normal'><h2>Experience the Taste of South India</h2></span>
        <div className='flex w-full h-5 flex-col md:flex-row gap-[6px]'>
          <div className='w-[108px] h-full px-1 flex py-[2px] rounded-sm bg-color-5 text-black'>
            <span className='text-xs leading-4 font-poppins font-medium whitespace-nowrap text-[11px]'>Authentic Cusine</span>
          </div>
          <div className='w-[120px] h-full px-1 py-[2px] rounded-sm bg-color-5 text-black'>
            <h5 className='text-xs leading-4 font-poppins font-medium whitespace-nowrap text-[10px]'>Traditional Recipes</h5>
          </div>
        </div>
        <span className='lg:translate-y-0 md:translate-y-2 translate-y-7 leading-5'><h2>Delight your taste buds with our exquisite dishes</h2></span>
      </div>
      <div className='w-[10rem] h-12'>
        <Button className='w-[10rem] rounded-lg h-12 text-n-1 bg-black' href='#exploremenu'>Explore Menu</Button>
      </div>
    </div>
  )
}

export default Hero;