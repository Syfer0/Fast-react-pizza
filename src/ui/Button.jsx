function Button({children,disabled}) {
  return (
    <div>
        <button
        disabled={disabled}
        className="bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block hover:bg-yellow-300  tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 sm:px-6 sm:py-4">
        {children}
            
        </button>
        </div>
  )
}

export default Button