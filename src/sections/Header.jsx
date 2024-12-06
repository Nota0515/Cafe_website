import {saravanalogo} from '../assets';
import { navigation } from '../constants';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Button from '../components/Button'
import { useState } from 'react';

const Header = () => {

  const [openNavigation, setOpenNavigation] = useState(false);
 
  const toggleNavigation = ()=>{
    if(openNavigation){
      setOpenNavigation(false);
    }else{
      setOpenNavigation(true);
    }
  };

  {console.log(openNavigation)};


  const handleclick =() =>{
    if(!openNavigation) return;

    else{
      setOpenNavigation(false);
    }
  };


  return (
    <div className='relative w-full h-20'>
      <div className='fixed top-0 left-0 w-screen h-20 z-50 px-5 py-4 bg-n-2 border-b border-b-n-3'>
        <div className='relative flex flex-row justify-center gap-2 md:gap-5 w-full h-10'>
          <div className='logo flex-shrink-0 w-10 h-10 rounded-full ml-auto'>
            <img src={saravanalogo} alt='brandlogo'/>
          </div>
          <div className='logotext relative mt-2 w-[62rem]'>
            <span className='absolute left-0 text-2xl bottom-0 md:text-3xl text-n-3 font-poppins font-medium'>Saravana Dosa</span>
          </div>
          <nav className={`${openNavigation ? 'flex' : "hidden"} fixed backdrop-blur-lg bg-n-2/90 md:bg-transparent top-0 left-0 right-0 bottom-0 lg:static md:static md:mx-auto lg:flex md:flex lg:mx-auto`}>
            <div className={`navelements relative z-2 flex flex-col gap-20 md:gap-5 lg:gap-10 items-center justify-center m-auto md:flex-row lg:flex-row`}>
              {navigation.map((item)=>(
                <span key={item.id}>
                  <a className='text-n-1 text-2xl md:text-base font-poppins hover:underline' href={item.url} onClick={handleclick}>{item.title}</a>
                </span>
              ))}
            </div>
          </nav>
          <div className='md:hidden w-10 h-10 mt-1'>
            <Button className="ml-auto md:hidden bg-transparent" onClick={toggleNavigation}>
             {
              openNavigation ? <RxCross2 size={40} color='#ffffff' /> : <IoReorderThreeOutline size={40} color='#ffffff'/>
             }
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;