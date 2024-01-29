import { Link } from "react-router-dom"

function Button({children,disabled,to, type}) {
   const base ="bg-yellow-400 text-sm uppercase font-semibold text-stone-800   inline-block hover:bg-yellow-300  tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  "
  const styles = {
    primary: base + 'py-3 px-4 md:px-6 md:py-4',
    small: base + 'py-2 md:px-5 md:py-2.5 text-xs',
    secondry: 'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5',
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