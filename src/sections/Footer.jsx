import {pixels_akhil} from '../assets';

const Footer = () => {
  return (
    <div className="flex justify-center border-t border-t-n-7 items-center w-screen h-[13.75rem] px-10 py-10 lg:px-[60px] lg:py-[60px] ">
      <div className="flex lg:flex-row md:flex-row flex-col flex-wrap gap-y-[30px] md:gap-x-[60px] lg:gap-x-[60px]">
        <div className="flex items-center justify-center">
          <span>© 2023 South Indian Flavors</span>
        </div>
        <div className="flex items-center justify-center">
          <span className='flex w-full flex-nowrap gap-2 items-center'>Designed by
              <div className="w-5 h-5 rounded-full shrink-0 bg-n-5 overflow-hidden">
                <img src={pixels_akhil} alt="DesignCompanyLogo" className="object-cover object-center" />
              </div>pixel.akhil
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;