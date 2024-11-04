const Button = ({children , className , onClick }) => {

  return (
    <button className={`${className || ''} relative inline-flex items-center justify-center h-11 p-1 transition-color bg-n-1 text-n-2 hover:bg-n-2 hover:text-n-1  `} onClick={onClick}>
        <span className="z-[2px]">{children}</span>
    </button>
  )
}

export default Button;