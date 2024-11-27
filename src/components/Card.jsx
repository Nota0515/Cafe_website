
const MenuItems = ({src , className , name , price , alt}) => {
  return (
    <div className={`relative card max-w-[340px] max-h-[420px] ${className || ''}`}>
      <div className='overflow-hidden w-full h-full'>
       <img className='w-full h-full overflow-hidden' alt={alt} src={src} />
      </div>
      <div className='absolute top-3/4 left-0 w-full h-[5rem] gap-y-1 px-3 py-3 bg-n-2 z-10 '>
        <span className='leading-6 font-poppins font-light text-n-3'>{name}</span>
        <span className='leading-7 font-poppins font-medium text-n-3'>{`${price}₹`}</span>
      </div>
    </div>
  )
}

export default MenuItems;