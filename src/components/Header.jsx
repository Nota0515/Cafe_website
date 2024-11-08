import Button from './Button';
import {saravanalogo} from '../assets'
import { navigation } from '../constants';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-2">
      <div className="flex item-center border-n-3 border-b-2 justify-between mt-5 px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className='block w-[24rem] justify-center pt-5 text-n-5 font-bold -ml-2 items-center overflow-hidden mb-2 mx-5' href='#home'>
          <img src={saravanalogo} width={100} height={60} alt='saravanalogo' className='-mt-5' />
          <span className=' absolute hidden lg:block md:flex top-1/2 left-32 text-4xl -translate-y-2.5  lg:text-5xl  font-medium text-n-3 font-poppins' href="#home">Saravan Dosa</span>
        </a>
        <nav className=' hidden md:flex lg:flex fixed lg:static justify-center items-center mx-10 px-5 left-1/2 lg:left-0 lg:-translate-x-0 lg:scale-110 -translate-x-1/2 scale-150 md:top-14'>
           <div className='relative z-2 flex items-center flex-col  justify-center m-auto md:flex-row lg:flex-row'>
              {navigation.map((item)=>(
                <a key={item.id} className='block lg:text-2xl font-poppins font-semibold px-4 lg:px-[2.5rem] py-6 ' href={item.url}>{item.title}</a>
              ))}
            </div> 
        </nav>
       <div className='flex justify-center items-center w-[12rem] lg:mr-5'>
        <Button className='font-poppins text-n-2 text-2xl bg-n-3 rounded-xl font-bold w-[10rem] h-[4.4rem]' href='#order'>Oder Now</Button>
       </div>
      </div>
    </div>
  )
}

export default Header