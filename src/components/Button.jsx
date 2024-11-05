const Button = ({children , className , href , onClick }) => {

  const classes = `${className || ''} relative inline-flex items-center justify-center h-11 p-1 transition-color bg-n-1 text-n-2 hover:bg-n-4 hover:text-n-1`

  const renderButton = () =>(
    <button className={classes} onClick={onClick}>
        <span className="z-[2px]">{children}</span>
    </button>
  );

  const renderLink = () =>(
    <a className={classes} href={href}>
        <span className="z-[2px]">{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
}

export default Button;