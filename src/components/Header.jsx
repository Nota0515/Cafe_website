import {saravanalogo} from '../assets';
import { navigation } from '../constants';

const Header = () => {
  return (
    <div className='relative w-full h-20'>
      <div className='fixed top-0 left-0 w-full h-20 z-50 px-5 py-4 bg-n-2'>
        <div className='relative flex flex-row justify-center gap-5 w-full h-10'>
          <div className='logo mt-[6px] w-10 h-10 rounded-full'>
            <img src={saravanalogo} alt='brandlogo'/>
          </div>
          <div className='logotext relative mt-[6px] w-[62rem]'>
            <span className='absolute left-0 text-3xl text-n-3 font-poppins font-medium'>Saravana Dosa</span>
          </div>
          <div className='navelements flex flex-row items-center gap-10 mt-[6px]'>
            {navigation.map((item)=>(
              <span key={item.id}>
                <a className='text-n-3 text-base font-poppins' href={item.url}>{item.title}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;