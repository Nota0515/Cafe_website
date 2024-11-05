import Button from './Button';
import {saravanalogo} from '../assets'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-2">
      <div className="flex item-center border-n-3 border-b-2 justify-between  mt-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className='flex w-[20rem] h-[6.25rem] justify-center pt-5 text-n-5 font-bold -ml-2 items-center overflow-hidden mb-2' href='#home'>
          <img src={saravanalogo} width={100} height={60} alt='saravanalogo' className='-mt-5' />
          <span className='scale-125 lg:scale-150 ml-7 lg:ml-10 font-poppins' href="#home">Saravan Dosa</span>
        </a>
        <nav className='flex justify-center items-center gap-[8rem] px-5 text-2xl font-poppins font-semibold'>
            <a href='#menu'>menu</a>
            <a href='#review'>review</a>
            <a href='#findus'>findus</a>
            <a href='#about'>about</a>
        </nav>
       <div className='flex justify-center items-center w-[12rem] lg:mr-5'>
        <Button className='font-poppins text-n-2 lg:text-2xl bg-n-3 rounded-xl font-bold w-[10rem] h-[4.4rem]' href='#order'>Oder Now</Button>
       </div>
      </div>
    </div>
  )
}

export default Header