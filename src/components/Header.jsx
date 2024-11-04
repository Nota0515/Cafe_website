import Button from './Button';
import {saravanalogo} from '../assets'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-2">
      <div className="flex item-center ">
        <a className='block w-[20rem] bg-black' href='#home'>
          <img src={saravanalogo} width={100} height={30} alt='saravanalogo' />
        </a>
      </div>
    </div>
  )
}

export default Header