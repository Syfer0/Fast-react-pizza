import { Link } from "react-router-dom"

function Button({children,disabled,to, type}) {
   const base ="bg-yellow-400 uppercase font-semibold text-stone-800   inline-block hover:bg-yellow-300  tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  "
  const styles = {
    primary: base + 'py-3 px-4 md:px-6 md:py-4',
    small: base + 'py-2 md:px-5 md:py-2.5 text-xs',
  }
  if(to)
  return <Link to={to} className={styles[type]}>
   {children}
  </Link>
  return (
    <div>
        <button
        disabled={disabled}
        className={styles[type]}>
        {children}
            
        </button>
        </div>
  )
}

export default Button